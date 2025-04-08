
import Badge from "./components/Badge"
import Card from "./components/Card/Card"
import cardIcon from './assets/cardIcon.svg'
import Banner from "./components/Banner/Banner"
function App() {

  return (
    <main className="bg-neutral-500 min-h-dvh">
      


      <br />
      <div className="flex flex-col gap-2 items-center min-w-dvw">
        <Badge colorChoice="red" shape="square">Hello badge!</Badge>
        <Card>
          <Card.Icon src={cardIcon} alt="an upload icon for uploading to the web" />
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Body>
        </Card>

        <Card>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Body>
        </Card>

        <Banner intent='attention'>
          <Banner.Paragraph intent="header">This is an attention</Banner.Paragraph>
        </Banner>
      </div>
    </main>
  )
}

export default App
