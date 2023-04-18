import AvailableApps from '../Apps/AvailableAppsView';
import CreateIllustrationView from '../CreateIllustration/CreateIllustrationView';
import LineView from '../Line/LineView';
import SliderView from '../Slider/SliderView';
import {
  AboutTitle,
  Title,
  InnerWrapper,
  MainTitle,
  LeftSide,
  RightSide,
  Description,
  DetailsWrapper,
} from './main.styled';

function MainView() {
  return (
    <main>
      <section className="create">
        <LineView />
        <div className="container">
          <InnerWrapper>
            <LeftSide>
              <AvailableApps />
              <MainTitle>
                CHOOSE YOUR WINTER <span>LOOK</span> APPAREL
              </MainTitle>
            </LeftSide>
            <RightSide>
              <CreateIllustrationView />
            </RightSide>
          </InnerWrapper>
        </div>
      </section>

      <section className="details">
        <div className="container">
          <DetailsWrapper>
            <ChooseLooksView />
            <AboutUsView />
          </DetailsWrapper>
        </div>
      </section>
    </main>
  );
}

function ChooseLooksView() {
  return (
    <div>
      <Title>CHOOSE LOOKS</Title>
      <SliderView />
    </div>
  );
}

function AboutUsView() {
  return (
    <div>
      <AboutTitle>MORE ABOUT US</AboutTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim
        sed libero commodo efficitur. Suspendisse et lorem ac neque dictum
        pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium.
        Vivamus ornare mauris non ligula egestas, accumsan faucibus quam
        sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis,
        porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices
        justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum.
        Morbi vitae convallis purus, ac finibus ipsum.
      </Description>
      <Description>
        Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar
        eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend
        vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris
        sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet
        volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui,
        vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh
        molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan
        velit. In hac habitasse platea dictumst.
      </Description>
    </div>
  );
}

export default MainView;
