import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Transition from "../transition";

const states = ["Himanchal", "Punjab", "Chandigarh", "Rajasthan", "Gujrat", "Pondicherry"];

const testimonials = [
  {
    id: 1,
    image: "/placeholder.svg?height=800&width=600",
    quote:
      "Untitled UI is the real deal. We've worked with a dozen agencies that simply don't deliver. Working with experienced and knowledgeable professionals at the helm is a breath of fresh air.",
    author: "Ellie Simpson",
    role: "Head of Design, Sisyphus Labs",
    stars: 5,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=800&width=600",
    quote:
      "The team's attention to detail and innovative approach has transformed our digital presence. Their expertise in UI/UX design is unmatched.",
    author: "Marcus Chen",
    role: "CTO, Future Technologies",
    stars: 5,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=800&width=600",
    quote:
      "Working with this team has been a game-changer for our startup. They understand our vision and deliver beyond expectations every single time.",
    author: "Sarah Johnson",
    role: "Founder, InnovateX",
    stars: 5,
  },
]


const ContactForm = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedState, setSelectedState] = useState([]);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm("service_rcq2ts3", "template_ng7m3ix", form.current, {
        publicKey: "d3HpTl0fav8RrIOPn",
      })
      .then(() => {
          setShowModal(true); // Show modal on success
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Error sending email: " + error.text);
        }
      );
  };

  const handleClose = () => {
    setShowModal(false);
    window.history.back(); // Redirect back
  };
  
  const handleStateChange = (e) => {
    const { value } = e.target;
    if (!selectedState.includes(value)) {
      setSelectedState([...selectedState, value]);
    }

  };

  const removeState = (state) => {
    setSelectedState(selectedState.filter((s) => s !== state));
  };



  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-8 lg:p-12">
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">We&apos;d love to help</h2>
                  <p className="mt-2 text-gray-600">
                    We&apos;re a full-service agency with experts ready to help. We&apos;ll get in touch within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" name="first_name" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" name="last_name" placeholder="Last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="user_email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="subject" type="tel" placeholder="+1 (555) 000-0000" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">Preferred States</Label>
                  <select
                    id="state"
                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    onChange={handleStateChange}
                  >
                    <option value="">Select a state</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                  {selectedState.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedState.map((state, index) => (
                        <span

                          key={index}
                          className="flex items-center gap-1 bg-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                          {state}
                          <button type="button" className="ml-2 text-red-500" onClick={() => removeState(state)}>&times;</button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Preferred College</Label>
                  <Textarea id="message" name="user_comment" placeholder="Mention your preferred college ..." className="min-h-[120px]" required />
                </div>
                <div className="text-sm text-gray-500">
                  Our team will get in touch with you via mail.
                </div>
                <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                  Send
                </Button>
              </form>
            </div>

            {/* Image Section with Testimonials */}
            <div className="relative hidden lg:block">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black">
                    <img src={testimonial.image || "/placeholder.svg"} alt={`Testimonial ${testimonial.id}`} className="object-cover mix-blend-overlay" />
                  </div>
                  <div className="absolute bottom-12 left-12 right-12 text-white space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 z-10 fill-current" />
                      ))}
                    </div>
                    <p className="text-lg">{testimonial.quote}</p>
                    <div className="space-y-1">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <div className="absolute bottom-12 right-12 flex gap-2">
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={previousTestimonial}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" onClick={nextTestimonial}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent className="text-center">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">Form Submitted!</DialogTitle>
            </DialogHeader>
            <p className="text-gray-600">Your form has been submitted successfully. You will be redirected back.</p>
            <Button onClick={handleClose} className="hover:bg-gray-800 mt-4 bg-black text-white">OK</Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const transitionContactForm = Transition(ContactForm);

export default transitionContactForm;