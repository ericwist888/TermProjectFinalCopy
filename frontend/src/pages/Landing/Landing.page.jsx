import { Container } from "@mantine/core";
import Turtle from "../../components/misc/Turtle";
import { LoadSpinner } from "../Post/loadSpinner";

const Landing = () => {
  return (
    <Container>
      <h1>make photo collections blossom in time</h1>
      <p>
        This app is a platform on which we can share our nature photography. 
      </p>
      <div>
      <Turtle width={510} height={450} />
      <img width ="70%" src="https://images.pexels.com/photos/16708854/pexels-photo-16708854/free-photo-of-cherry-tree-in-blossom-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="niagra image" /><br /> 
      {/* <hr style={{height: '5px', backgroundColor: 'gray' }}/> */}
      </div>
    </Container>
  );
};

export default Landing;
