'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import { 
  Sparkles, 
  Calendar, 
  Shuffle, 
  Heart, 
  BookOpen, 
  HelpCircle, 
  Star,
  Volume2,
  VolumeX,
  ChevronDown,
  X,
  Plus,
  Minus,
  Moon,
  Sun
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar as CalendarComponent } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { 
  grabovoiNumbers, 
  categories, 
  numberMeanings, 
  getRandomNumber, 
  getNumbersByCategory,
  calculateDayNumber,
  getNumbersForDay,
  type GrabovoiNumber,
  type Category
} from '@/data/grabovoi-numbers'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

// Storage keys
const FAVORITES_KEY = 'grabovoi_favorites'
const COUNTER_KEY = 'grabovoi_counter'

// Helper to get initial values from localStorage
function getInitialFavorites(): string[] {
  if (typeof window === 'undefined') return []
  const saved = localStorage.getItem(FAVORITES_KEY)
  return saved ? JSON.parse(saved) : []
}

function getInitialCounter(): number {
  if (typeof window === 'undefined') return 0
  const saved = localStorage.getItem(COUNTER_KEY)
  return saved ? parseInt(saved) : 0
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [currentNumber, setCurrentNumber] = useState<GrabovoiNumber | null>(null)
  const [isRevealing, setIsRevealing] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [favorites, setFavorites] = useState<string[]>(getInitialFavorites)
  const [energyCounter, setEnergyCounter] = useState(getInitialCounter)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [activeSection, setActiveSection] = useState<'main' | 'learn' | 'howto'>('main')
  
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Create audio element for bell sound
  useEffect(() => {
    // Create a simple bell sound using Web Audio API
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleRMwO4P/26leGyxCfPzdtVkXKkJ//Ny0VhYoPX7/1K1SFik+gP/MrFMXKT+Af8irURcmQH5+waZQFiVAfX69o08XJ0B8fbuePRgoQHx8uJw7GClAfHs4mzoYJ0B7ejWZOBYnQHp5M5g4FihAenYzlzdZKUB5dTKWN1gpQHh0MZU2XSlAeHMwkjZeKkB4cT+RNl8qQHdwPpA1YCpAd26/jzRhKkB2bT6ONGEqQHZsPYwzYipAdWu8jDJjKkB1ajs8h7YlQHVpOTqGsCZAdWc3OIGxJkB0ZjY0gK8mQHRmMzN+riZAdGUyMnotJkB0ZDEyfC0mQHRjMDF+LiZAc2IvMX0vJkBzYi4we0AmQHNiKzJ7QSZAc2EqM3pGJkBzYCk0e00mQHNgKDV7UCZAc18nN3xTJkBzXic3fVYmQHNeJjZ+WSZAc10mNn9bJkBzXCU1gFsmQLNbJDR/WiZAs1skNH9dJkCyWyM0gF4mQLJYIjOBXyZAsVchM4JgJkCxVSAzgmE=') 
  }, [])

  // Play sound
  const playSound = useCallback(() => {
    if (soundEnabled && audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }
  }, [soundEnabled])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  useEffect(() => {
    localStorage.setItem(COUNTER_KEY, energyCounter.toString())
  }, [energyCounter])

  // Confetti animation
  const triggerConfetti = useCallback(() => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999
    }

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      })
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#9370DB', '#00CED1']
    })
    fire(0.2, {
      spread: 60,
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#9370DB', '#00CED1']
    })
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#9370DB', '#00CED1']
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#9370DB', '#00CED1']
    })
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#9370DB', '#00CED1']
    })
  }, [])

  // Random number generation with animation
  const handleRandomNumber = useCallback(() => {
    setIsRevealing(true)
    setCurrentNumber(null)
    
    // Increment counter
    setEnergyCounter(prev => prev + 1)
    
    setTimeout(() => {
      const number = getRandomNumber()
      setCurrentNumber(number)
      setIsRevealing(false)
      playSound()
      triggerConfetti()
    }, 1500)
  }, [playSound, triggerConfetti])

  // Category selection
  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category)
    const numbers = getNumbersByCategory(category)
    if (numbers.length > 0) {
      setCurrentNumber(numbers[0])
    }
  }, [])

  // Date selection
  const handleDateSelect = useCallback((date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      const dayNumbers = getNumbersForDay(date)
      if (dayNumbers.length > 0) {
        setCurrentNumber(dayNumbers[0])
      }
    }
  }, [])

  // Toggle favorite
  const toggleFavorite = useCallback((id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(f => f !== id)
        : [...prev, id]
    )
  }, [])

  // Get day number meaning
  const dayNumber = calculateDayNumber(selectedDate)
  const dayMeaning = numberMeanings[dayNumber.toString()]

  // Get numbers for selected date
  const dayNumbers = getNumbersForDay(selectedDate)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-violet-900 to-indigo-950 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Header */}
      <header className="relative z-10 pt-6 pb-4 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
                Números de Grabovoi
              </h1>
              <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
            </div>
            <p className="text-purple-200 text-sm sm:text-base">
              Generador de Energía Positiva
            </p>
          </motion.div>

          {/* Energy Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mt-4"
          >
            <Badge variant="secondary" className="bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-400/30 text-amber-200 px-4 py-2 text-sm">
              ⚡ Energía Generada: {energyCounter} veces
            </Badge>
          </motion.div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="relative z-10 px-4 mb-6">
        <div className="max-w-4xl mx-auto flex justify-center gap-2">
          {[
            { id: 'main', label: 'Principal', icon: Sparkles },
            { id: 'learn', label: 'Aprende', icon: BookOpen },
            { id: 'howto', label: 'Cómo Usar', icon: HelpCircle }
          ].map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              variant={activeSection === tab.id ? 'default' : 'ghost'}
              className={`
                flex items-center gap-2 px-3 sm:px-4 py-2 text-sm
                ${activeSection === tab.id 
                  ? 'bg-gradient-to-r from-amber-500 to-purple-500 text-white shadow-lg shadow-purple-500/30' 
                  : 'text-purple-200 hover:text-white hover:bg-white/10'}
              `}
            >
              <tab.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection === 'main' && (
              <motion.div
                key="main"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                {/* Date Selector & Random Button */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date Selector */}
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-200">
                        <Calendar className="w-5 h-5" />
                        Número del Día
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button 
                            variant="outline" 
                            className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            {format(selectedDate, "d 'de' MMMM", { locale: es })}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                          <CalendarComponent
                            mode="single"
                            selected={selectedDate}
                            onSelect={handleDateSelect}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      
                      <div className="text-center p-3 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-lg">
                        <p className="text-amber-200 text-sm">Número del día:</p>
                        <p className="text-3xl font-bold text-amber-400">{dayNumber}</p>
                        <p className="text-purple-200 text-xs mt-1">{dayMeaning}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Random Button */}
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-200">
                        <Shuffle className="w-5 h-5" />
                        Modo Aleatorio
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button
                        onClick={handleRandomNumber}
                        disabled={isRevealing}
                        className="w-full h-14 bg-gradient-to-r from-amber-500 via-orange-500 to-purple-500 hover:from-amber-400 hover:via-orange-400 hover:to-purple-400 text-white font-bold text-lg shadow-lg shadow-purple-500/30 transition-all duration-300"
                      >
                        {isRevealing ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkles className="w-6 h-6" />
                          </motion.div>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 mr-2" />
                            ¡Manifestar Número!
                          </>
                        )}
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setSoundEnabled(!soundEnabled)}
                          className="text-purple-200 hover:text-white hover:bg-white/10"
                        >
                          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                        </Button>
                        <span className="text-xs text-purple-300">
                          {soundEnabled ? 'Sonido ON' : 'Sonido OFF'}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Categories */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-amber-200">Buscar por Categoría</CardTitle>
                    <CardDescription className="text-purple-300">
                      Selecciona una categoría para encontrar el código perfecto
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {categories.map((category) => (
                        <motion.button
                          key={category.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCategorySelect(category.id)}
                          className={`
                            p-3 rounded-xl text-center transition-all duration-300
                            ${selectedCategory === category.id 
                              ? `${category.gradient} shadow-lg` 
                              : 'bg-white/10 hover:bg-white/20'}
                          `}
                        >
                          <span className="text-2xl">{category.emoji}</span>
                          <p className="text-xs mt-1 font-medium text-white/90">{category.name}</p>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Current Number Display */}
                <AnimatePresence mode="wait">
                  {currentNumber && (
                    <motion.div
                      key={currentNumber.id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-gradient-to-br from-purple-800/50 to-indigo-900/50 backdrop-blur-lg border-amber-400/30 overflow-hidden shadow-2xl shadow-purple-500/20">
                        <CardContent className="p-6 sm:p-8">
                          {/* Number with glow effect */}
                          <div className="text-center mb-6">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", bounce: 0.5 }}
                              className="relative inline-block"
                            >
                              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent"
                                style={{
                                  textShadow: '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(255, 215, 0, 0.3)'
                                }}
                              >
                                {currentNumber.sequence}
                              </h2>
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-300 blur-2xl opacity-30 -z-10" />
                            </motion.div>
                          </div>

                          {/* Description */}
                          <div className="text-center mb-6">
                            <p className="text-xl sm:text-2xl text-purple-100 font-medium">
                              {currentNumber.description}
                            </p>
                            <Badge variant="secondary" className="mt-3 bg-white/10 text-purple-200">
                              {categories.find(c => c.id === currentNumber.category)?.emoji}{' '}
                              {categories.find(c => c.id === currentNumber.category)?.name}
                            </Badge>
                          </div>

                          {/* Keywords */}
                          <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {currentNumber.keywords.map((keyword, index) => (
                              <Badge 
                                key={index}
                                variant="outline"
                                className="border-amber-400/50 text-amber-200"
                              >
                                #{keyword}
                              </Badge>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex justify-center gap-3">
                            <Button
                              onClick={() => toggleFavorite(currentNumber.id)}
                              variant="outline"
                              className={`
                                border-white/20 transition-all duration-300
                                ${favorites.includes(currentNumber.id) 
                                  ? 'bg-rose-500/30 border-rose-400 text-rose-200' 
                                  : 'bg-white/10 text-white hover:bg-white/20'}
                              `}
                            >
                              <Heart 
                                className={`w-4 h-4 mr-2 ${favorites.includes(currentNumber.id) ? 'fill-current' : ''}`} 
                              />
                              {favorites.includes(currentNumber.id) ? 'En Favoritos' : 'Añadir a Favoritos'}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Day Numbers Section */}
                {dayNumbers.length > 0 && (
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-200">
                        <Sun className="w-5 h-5" />
                        Números para hoy ({format(selectedDate, "d MMM", { locale: es })})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-64 pr-4">
                        <div className="space-y-3">
                          {dayNumbers.map((num) => (
                            <motion.div
                              key={num.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setCurrentNumber(num)}
                              className="p-4 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer transition-all border border-white/10 hover:border-amber-400/30"
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-xl font-bold text-amber-300">{num.sequence}</p>
                                  <p className="text-sm text-purple-200">{num.description}</p>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleFavorite(num.id)
                                  }}
                                  className="text-purple-300 hover:text-rose-400"
                                >
                                  <Heart 
                                    className={`w-4 h-4 ${favorites.includes(num.id) ? 'fill-rose-400 text-rose-400' : ''}`} 
                                  />
                                </Button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}

                {/* Category Numbers */}
                {selectedCategory && (
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-200">
                        {categories.find(c => c.id === selectedCategory)?.emoji}
                        {categories.find(c => c.id === selectedCategory)?.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-80 pr-4">
                        <div className="space-y-3">
                          {getNumbersByCategory(selectedCategory).map((num) => (
                            <motion.div
                              key={num.id}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setCurrentNumber(num)}
                              className={`p-4 rounded-xl cursor-pointer transition-all border ${
                                currentNumber?.id === num.id 
                                  ? 'bg-amber-500/20 border-amber-400/50' 
                                  : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-amber-400/30'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-xl font-bold text-amber-300">{num.sequence}</p>
                                  <p className="text-sm text-purple-200">{num.description}</p>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleFavorite(num.id)
                                  }}
                                  className="text-purple-300 hover:text-rose-400"
                                >
                                  <Heart 
                                    className={`w-4 h-4 ${favorites.includes(num.id) ? 'fill-rose-400 text-rose-400' : ''}`} 
                                  />
                                </Button>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}

                {/* Favorites Section */}
                {favorites.length > 0 && (
                  <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 text-amber-200">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        Mis Favoritos ({favorites.length})
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-48 pr-4">
                        <div className="space-y-2">
                          {favorites.map((favId) => {
                            const num = grabovoiNumbers.find(n => n.id === favId)
                            if (!num) return null
                            return (
                              <motion.div
                                key={num.id}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setCurrentNumber(num)}
                                className="p-3 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all flex items-center justify-between"
                              >
                                <div>
                                  <p className="font-bold text-amber-300">{num.sequence}</p>
                                  <p className="text-xs text-purple-200">{num.description}</p>
                                </div>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleFavorite(num.id)
                                  }}
                                  className="text-rose-400 hover:text-rose-300"
                                >
                                  <X className="w-4 h-4" />
                                </Button>
                              </motion.div>
                            )
                          })}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            )}

            {activeSection === 'learn' && (
              <motion.div
                key="learn"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-200 flex items-center gap-2">
                      <BookOpen className="w-6 h-6" />
                      Significado de los Números
                    </CardTitle>
                    <CardDescription className="text-purple-300">
                      Cada número tiene un significado especial en el sistema Grabovoi
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {Object.entries(numberMeanings).map(([num, meaning]) => (
                        <motion.div
                          key={num}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: parseInt(num) * 0.1 }}
                          className="p-4 bg-gradient-to-br from-purple-800/30 to-indigo-800/30 rounded-xl border border-white/10"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-3xl font-bold text-amber-400 w-10 text-center">
                              {num}
                            </span>
                            <p className="text-purple-100 text-sm leading-relaxed">
                              {meaning}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-200">¿Quién es Grabovoi?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-purple-100">
                    <p>
                      <strong className="text-amber-300">Grigori Grabovoi</strong> es un matemático y físico ruso 
                      conocido por desarrollar un sistema de secuencias numéricas para la sanación, 
                      manifestación y transformación personal.
                    </p>
                    <p>
                      Sus métodos se basan en la premisa de que cada número tiene una frecuencia 
                      vibratoria específica que puede influir en la realidad cuando se enfoca 
                      la intención sobre ellos.
                    </p>
                    <div className="p-4 bg-amber-500/10 rounded-lg border border-amber-400/30">
                      <p className="text-amber-200 text-sm">
                        💡 Los guiones bajos (_) en las secuencias representan pausas naturales 
                        al leer el número, ayudando a una mejor concentración.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeSection === 'howto' && (
              <motion.div
                key="howto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-amber-200 flex items-center gap-2">
                      <HelpCircle className="w-6 h-6" />
                      Cómo Usar los Números de Grabovoi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Step 1 */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                        <Badge className="bg-amber-500 text-white">1</Badge>
                        Cómo Leer los Números
                      </h3>
                      <div className="pl-8 text-purple-100 space-y-2">
                        <p>• Lee cada dígito por separado: <span className="text-amber-300">520</span> = "cinco-dos-cero"</p>
                        <p>• Los guiones bajos (_) indican pausas naturales</p>
                        <p>• Mantén una respiración tranquila mientras lees</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Step 2 */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                        <Badge className="bg-amber-500 text-white">2</Badge>
                        Mejor Horario
                      </h3>
                      <div className="pl-8 text-purple-100 space-y-2">
                        <p>• El horario recomendado es entre <span className="text-amber-300">10:00 PM y 11:00 PM</span></p>
                        <p>• Este momento tiene mayor receptividad energética</p>
                        <p>• Realiza la práctica diariamente durante 21 días</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Step 3 */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                        <Badge className="bg-amber-500 text-white">3</Badge>
                        Visualización
                      </h3>
                      <div className="pl-8 text-purple-100 space-y-2">
                        <p>• Imagina una <span className="text-amber-300">esfera plateada brillante</span> frente a ti</p>
                        <p>• Coloca el número dentro de la esfera</p>
                        <p>• Visualiza cómo la luz plateada envuelve cada dígito</p>
                        <p>• Siente la energía del número expandirse</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Step 4 */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                        <Badge className="bg-amber-500 text-white">4</Badge>
                        Protocolo de Limpieza del Pasado
                      </h3>
                      <div className="pl-8 text-purple-100 space-y-2">
                        <p>• Antes de manifestar, usa: <span className="text-amber-300">520</span></p>
                        <p>• Este código ayuda a limpiar bloqueos del pasado</p>
                        <p>• Repite mentalmente: "Libero todo lo que no me sirve"</p>
                        <p>• Luego procede con tu número específico</p>
                      </div>
                    </div>

                    <Separator className="bg-white/10" />

                    {/* Step 5 */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-amber-300 flex items-center gap-2">
                        <Badge className="bg-amber-500 text-white">5</Badge>
                        Consejos Adicionales
                      </h3>
                      <div className="pl-8 text-purple-100 space-y-2">
                        <p>• Mantén una actitud de gratitud</p>
                        <p>• Confía en el proceso sin duda ni resistencia</p>
                        <p>• Puedes escribir el número en papel y llevarlo contigo</p>
                        <p>• Escríbelo 45 veces seguidas para mayor efectividad</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-amber-500/20 to-purple-500/20 backdrop-blur-lg border-amber-400/30">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <Sparkles className="w-12 h-12 text-amber-400 mx-auto" />
                      <h3 className="text-xl font-bold text-amber-200">Recuerda</h3>
                      <p className="text-purple-100">
                        La clave está en la <strong className="text-amber-300">fe</strong> y la 
                        <strong className="text-amber-300"> constancia</strong>. Los números son herramientas 
                        de enfoque para tu intención. Tu mente y corazón hacen el trabajo real.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-purple-300 text-sm">
        <p>✨ Números de Grabovoi - Manifestando abundancia y bienestar ✨</p>
        <p className="text-xs mt-2 text-purple-400">Hecho con amor y luz</p>
      </footer>
    </div>
  )
}
