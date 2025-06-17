"use client"

import { useState, useRef, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa'
import { locations, MapLocation } from '@/mock/MazeBankLocations'

// Placeholder image for the Maze Bank Map
// You will need to replace this with your actual map image
import MazeBankMapImage from '@/assets/img/map.webp' // Assuming you have this image in your assets

export default function MazeBankMapPage() {
    const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
    const [zoomLevel, setZoomLevel] = useState(1)
    const [offset, setOffset] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [startDragPos, setStartDragPos] = useState({ x: 0, y: 0 })
    const [hoveredLocation, setHoveredLocation] = useState<MapLocation | null>(null)
    const [tooltipPos, setTooltipPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const mapContainerRef = useRef<HTMLDivElement>(null)

    const handleWheel = useCallback((e: WheelEvent) => {
        e.preventDefault() // Prevent page scrolling
        const scaleAmount = 0.1
        const newZoomLevel = e.deltaY < 0 ? zoomLevel * (1 + scaleAmount) : zoomLevel / (1 + scaleAmount)
        setZoomLevel(Math.max(1, Math.min(5, newZoomLevel))) // Limit zoom between 1x and 5x

        // No offset adjustment on wheel for simplicity, zoom remains centered.
    }, [zoomLevel])

    const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (zoomLevel > 1) { // Only allow dragging if zoomed in
            setIsDragging(true)
            setStartDragPos({ x: e.clientX - offset.x, y: e.clientY - offset.y })
            e.preventDefault() // Prevent default browser drag behavior
        }
    }, [zoomLevel, offset])

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return
        if (!mapContainerRef.current) return

        const containerWidth = mapContainerRef.current.clientWidth
        const containerHeight = mapContainerRef.current.clientHeight

        // Calculate the size of the image as displayed (cover mode)
        const imageAspect = MazeBankMapImage.width / MazeBankMapImage.height
        const containerAspect = containerWidth / containerHeight
        let imageDisplayWidth = containerWidth
        let imageDisplayHeight = containerHeight

        if (imageAspect > containerAspect) {
            // Image is wider than container
            imageDisplayWidth = containerWidth * zoomLevel
            imageDisplayHeight = (containerWidth / imageAspect) * zoomLevel
        } else {
            // Image is taller than container
            imageDisplayHeight = containerHeight * zoomLevel
            imageDisplayWidth = (containerHeight * imageAspect) * zoomLevel
        }

        // Calculate max pan so that the container is always covered by the image
        const maxOffsetX = Math.max(0, (imageDisplayWidth - containerWidth) / 2)
        const maxOffsetY = Math.max(0, (imageDisplayHeight - containerHeight) / 2)

        let newX = e.clientX - startDragPos.x
        let newY = e.clientY - startDragPos.y

        // Constrain movement within image boundaries
        newX = Math.max(-maxOffsetX, Math.min(maxOffsetX, newX))
        newY = Math.max(-maxOffsetY, Math.min(maxOffsetY, newY))

        setOffset({ x: newX, y: newY })
        e.preventDefault() // Prevent default browser drag behavior
    }, [isDragging, startDragPos, zoomLevel])

    const handleMouseUp = useCallback(() => {
        setIsDragging(false)
    }, [])

    // Tooltip handlers
    const handleMarkerMouseEnter = (location: MapLocation) => (e: React.MouseEvent) => {
        setHoveredLocation(location)
    }
    const handleMarkerMouseMove = () => { }
    const handleMarkerMouseLeave = () => {
        setHoveredLocation(null)
    }

    useEffect(() => {
        const container = mapContainerRef.current
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false })
            return () => {
                container.removeEventListener('wheel', handleWheel)
            }
        }
    }, [handleWheel])

    useEffect(() => {
        if (Math.abs(zoomLevel - 1) < 0.02) {
            setOffset({ x: 0, y: 0 })
        }
    }, [zoomLevel])

    return (
        <div className="min-h-screen flex flex-col items-center justify-center pt-20 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Explora Maze Bank
            </h1>

            <div className="flex flex-col lg:flex-row w-full max-w-[1400px] gap-8 px-4 md:px-0">
                {/* Left Section: Map */}
                <div
                    ref={mapContainerRef}
                    className="relative w-full lg:w-3/5 bg-MazeGray rounded-xl shadow-2xl overflow-hidden cursor-grab aspect-[5/6] max-h-[80vh] max-w-[calc(80vh*5/6)]"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // Stop dragging if mouse leaves the map area
                >
                    {/* Map Image and Markers Wrapper */}
                    <div
                        className="absolute inset-0 transition-transform duration-75 ease-out origin-center"
                        style={{
                            transform: `scale(${zoomLevel}) translate(${offset.x / zoomLevel}px, ${offset.y / zoomLevel}px)`,
                            cursor: isDragging ? 'grabbing' : 'grab'
                        }}
                    >
                        {/* Map Image */}
                        <Image
                            src={MazeBankMapImage}
                            alt="Mapa de Maze Bank"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            className="opacity-80"
                        />

                        {/* Map Markers */}
                        {locations.map(location => (
                            <button
                                key={location.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none z-10"
                                style={{ left: `${location.x}%`, top: `${location.y}%` }}
                                onClick={() => setSelectedLocation(location)}
                                aria-label={`Ver detalles de ${location.title}`}
                                onMouseEnter={handleMarkerMouseEnter(location)}
                                onMouseMove={handleMarkerMouseMove}
                                onMouseLeave={handleMarkerMouseLeave}
                            >
                                <FaMapMarkerAlt className="text-MazeRedColor text-4xl drop-shadow-lg transition-transform hover:scale-125" />
                            </button>
                        ))}
                        {/* Tooltip Preview */}
                        {hoveredLocation && mapContainerRef.current && (
                            (() => {
                                // Calculate tooltip position based on marker's percent position and map container size
                                const containerRect = mapContainerRef.current.getBoundingClientRect();
                                const left = containerRect.left + (hoveredLocation.x / 100) * containerRect.width;
                                const top = containerRect.top + (hoveredLocation.y / 100) * containerRect.height;
                                return (
                                    <div
                                        className="fixed z-50 pointer-events-none"
                                        style={{
                                            left: left,
                                            top: top - 40, // 40px above the marker (closer)
                                            transform: 'translate(-50%, 0)',
                                        }}
                                    >
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-64 p-3 flex gap-3 items-center animate-fade-in">
                                            <img
                                                src={hoveredLocation.image}
                                                alt={hoveredLocation.title}
                                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0 border border-gray-300"
                                            />
                                            <div>
                                                <div className="font-bold text-gray-900 text-base mb-1 line-clamp-1">{hoveredLocation.title}</div>
                                                <div className="text-gray-500 text-xs line-clamp-2">{hoveredLocation.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()
                        )}
                    </div>
                </div>

                {/* Right Section: Locations List */}
                <div className="w-full lg:w-2/5 text-white bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col">
                    <h2 className="text-3xl font-bold mb-6 text-MazeRedColor">
                        Nuestras Ubicaciones
                    </h2>
                    <ul className="space-y-4 overflow-y-auto max-h-[calc(100vh-250px)] lg:max-h-[70vh]">
                        {locations.map(location => (
                            <li key={location.id}>
                                <button
                                    className="w-full text-left p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-MazeRedColor"
                                    onClick={() => setSelectedLocation(location)}
                                >
                                    <h3 className="text-xl font-semibold text-white mb-1">
                                        {location.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm line-clamp-2">
                                        {location.description}
                                    </p>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Location Info Modal */}
            {selectedLocation && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-8 max-w-lg w-full shadow-2xl relative">
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                            onClick={() => setSelectedLocation(null)}
                            aria-label="Cerrar"
                        >
                            <FaTimes />
                        </button>
                        <h2 className="text-3xl font-bold text-MazeBlack mb-4">
                            {selectedLocation.title}
                        </h2>
                        <p className="text-gray-700 text-lg">
                            {selectedLocation.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}