import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  GraduationCap,
  MapPin,
  Award,
  Users,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  X,
  Globe,
  Trophy,
  BookOpen,
} from "lucide-react"

import { Link } from "react-router-dom"
const MedicalCollegePage = ({ stateName, stateImage, colleges }) => {
  const [expandedCollege, setExpandedCollege] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showFullDescription, setShowFullDescription] = useState(false)
  const descriptionLimit = 250

  useEffect(() => {
    if (expandedCollege !== null) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "auto"
      document.body.style.overflow = "auto"
    }
    return () => {
      document.documentElement.style.overflow = "auto"
      document.body.style.overflow = "auto"
    }
  }, [expandedCollege])

  const filteredColleges = colleges.filter((college) => college.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <>
      <Header />
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden bg-primary-900">
        <div className="absolute inset-0">
          <img
            src={stateImage || "/placeholder.svg"}

            alt={stateName}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/90 via-primary-900/70 to-primary-900/50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center items-start">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 backdrop-blur-sm mb-6">
            <Globe className="w-4 h-4 text-secondary-300" />
            <span className="text-sm text-secondary-200">NRI Medical Counselling</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            {stateName}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-2xl"
          >
            Navigate your journey to premier medical education in India with expert guidance and support
          </motion.p>
        </div>
      </div>

      {/* Search Section */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-primary-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search medical colleges..."
              className="w-full pl-12 py-6 text-lg shadow-sm border-primary-200 focus:border-primary-500 focus:ring-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Colleges Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredColleges.map((college, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-shadow duration-300 overflow-hidden border-primary-100 hover:border-primary-200"
              onClick={() => setExpandedCollege(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={college.image || "/placeholder.svg"}
                  alt={college.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* overlay content */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {college.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="bg-accent text-primary font-medium">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2 text-primary-700">{college.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-center text-primary-600">
                    <MapPin className="w-4 h-4 mr-2 z-10" />
                    <span className="text-sm">{college.location}</span>
                  </div>
                  <div className="flex items-center text-primary-600">

                    <Users className="w-4 h-4 mr-2 z-10" />
                    <span className="text-sm">{college.seats} Available Seats</span>
                  </div>
                  <div className="flex items-center text-primary-600">

                    <Calendar className="w-4 h-4 mr-2 z-10" />
                    <span className="text-sm">Est. {college.established}</span>
                  </div>

                </div>
              <div className="mt-4 flex items-center justify-between text-sm text-primary-600">
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1 z-10" />
                  <span>Rank: {college.ranking}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1 z-10" />
                  <span>{college.exams.join(", ")}</span>
                </div>
              </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Expanded College Modal */}
      <AnimatePresence>
        {expandedCollege !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-900/60 backdrop-blur-sm z-50 flex items-end justify-center p-4"
            onClick={() => setExpandedCollege(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-72 relative">
                  <img
                    src={filteredColleges[expandedCollege].image || "/placeholder.svg"}
                    alt={filteredColleges[expandedCollege].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent" />
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={() => setExpandedCollege(null)}
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {filteredColleges[expandedCollege].certifications.map((cert) => (
                      <Badge key={cert} variant="secondary" className="bg-accent text-primary-700 font-medium">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="text-3xl font-bold mb-2 text-primary-900">{filteredColleges[expandedCollege].name}</h2>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-primary-50">
                        <h3 className="text-sm font-medium text-primary-600 mb-1">Location</h3>
                        <p className="flex items-center text-primary-700">
                          <MapPin className="w-4 h-4 mr-2" />
                          {filteredColleges[expandedCollege].location}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary-50">
                        <h3 className="text-sm font-medium text-primary-600 mb-1">Established</h3>
                        <p className="flex items-center text-primary-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          {filteredColleges[expandedCollege].established}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary-50">
                        <h3 className="text-sm font-medium text-primary-600 mb-1">Available Seats</h3>
                        <p className="flex items-center text-primary-700">
                          <Users className="w-4 h-4 mr-2" />
                          {filteredColleges[expandedCollege].seats}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-secondary-50">
                        <h3 className="text-sm font-medium text-secondary-700 mb-1">Fee Structure</h3>
                        <p className="text-2xl font-bold text-secondary-800">
                          {filteredColleges[expandedCollege].feeStructure}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-accent">
                        <h3 className="text-sm font-medium text-primary-700 mb-2">Courses Offered</h3>
                        <div className="flex flex-wrap gap-2">
                          {filteredColleges[expandedCollege].courses.map((course) => (
                            <Badge key={course} variant="outline" className="bg-white/80 text-primary-700">
                              <GraduationCap className="w-3 h-3 mr-1" />
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-4 rounded-lg bg-primary-50">
                        <h3 className="text-sm font-medium text-primary-600 mb-2">Quick Actions</h3>
                        <div className="flex gap-3">
                          <Link to="/Form">
                          <Button className="bg-primary-600 hover:bg-primary-700 text-white">
                            Apply Now
                          </Button>
                          </Link>
                          <Link to='/Form' target="_blank">
                          <Button variant="outline" className="border-primary-200 text-primary-700 hover:bg-primary-50">
                            Download Brochure
                          </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary-50 mt-4">
                    <h3 className="text-sm font-medium text-primary-600 mb-2">Ranking & Exams</h3>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="text-lg font-semibold text-primary-700">
                          Rank: {filteredColleges[expandedCollege].ranking}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2 text-primary-600" />
                        <span className="text-sm text-primary-700">
                          {filteredColleges[expandedCollege].exams.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 bg-gradient-to-b from-primary-50/50 to-transparent p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-primary-900">About the College</h3>
                    <div className="relative">
                      <p className="text-primary-700 leading-relaxed">
                        {showFullDescription
                          ? filteredColleges[expandedCollege].description
                          : `${filteredColleges[expandedCollege].description.substring(0, descriptionLimit)}...`}
                      </p>
                      {filteredColleges[expandedCollege].description.length > descriptionLimit && (
                        <Button
                          variant="ghost"
                          className="mt-2 text-primary-600 hover:text-primary-700 hover:bg-primary-50"
                          onClick={() => setShowFullDescription(!showFullDescription)}
                        >
                          {showFullDescription ? (
                            <span className="flex items-center">
                              Show Less <ChevronUp className="ml-1 w-4 h-4" />
                            </span>
                          ) : (
                            <span className="flex items-center">
                              Read More <ChevronDown className="ml-1 w-4 h-4" />
                            </span>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-primary-100">
                    <a
                      href={filteredColleges[expandedCollege].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Official College Website
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MedicalCollegePage;

