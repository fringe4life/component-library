
import Badge from "./components/Badge"
import Card from "./components/Card/Card"
import cardIcon from './assets/cardIcon.svg'
function App() {

  return (
    <main className="bg-neutral-500 min-h-dvh">
      <Badge colorChoice="red" shape="square">Hello badge!</Badge>


      <br />
      <div className="flex flex-col gap-2 items-center min-w-dvw">
        <Card intent="withImage">
          <Card.Icon src={cardIcon} alt="an upload icon for uploading to the web" />
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Body>
        </Card>

        <Card intent="withoutImage">
          {/* <CardIcon src={cardIcon} alt="an upload icon for uploading to the web" /> */}
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Body>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Body>
        </Card>
      </div>
    </main>
  )
}

export default App
