import Footer from './components/Footer'
import Header from './components/Header'
import AboutUs from './pages/aboutUs'
import OurJobs from './pages/OurJobs'
import Skills from './pages/Skills'

function App() {
	return (
		<>
			<Header />
			<main className={`container`}>
				<AboutUs />
				<OurJobs />
				<Skills />
			</main>
			<Footer />
			<Footer />
			<Footer />
		</>
	)
}

export default App
