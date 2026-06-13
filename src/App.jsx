import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingButtons from './components/layout/FloatingButtons'
import AlertBar from './components/sections/AlertBar'
import Hero from './components/sections/Hero'
import TrustStats from './components/sections/TrustStats'
import PhotoCarousel from './components/sections/PhotoCarousel'
import EventsSection from './components/sections/EventsSection'
import TopicsSection from './components/sections/TopicsSection'
import FeaturedCourses from './components/sections/FeaturedCourses'
import AllCourses from './components/sections/AllCourses'
import BoardSection from './components/sections/BoardSection'
import MembershipSection from './components/sections/MembershipSection'
import EndorsementsSection from './components/sections/EndorsementsSection'
import AboutSection from './components/sections/AboutSection'
import AssociatesSection from './components/sections/AssociatesSection'
import ContactSection from './components/sections/ContactSection'

// Landing page COMEFYR — datos en src/data, listo para Supabase
export default function App() {
  return (
    <>
      <Navbar />

      {/* Espacio para navbar fijo */}
      <div className="pt-[72px] sm:pt-[80px] lg:pt-[88px]">
        <AlertBar />

      <main className="pb-24">
        <Hero />
        <TrustStats />
        <PhotoCarousel />
        <EventsSection />
        <TopicsSection />
        <FeaturedCourses />
        <AllCourses />
        <BoardSection />
        <MembershipSection />
        <EndorsementsSection />
        <AboutSection />
        <AssociatesSection />
        <ContactSection />
      </main>
      </div>

      <Footer />
      <FloatingButtons />
    </>
  )
}
