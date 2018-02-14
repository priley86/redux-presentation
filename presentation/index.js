import React from "react";
import "prismjs";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("prismjs/themes/prism-dark.css");
require("../assets/app.css");
require("../assets/freezeframe.min.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    navy: "#191970"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const images = {
  reduxThunk: require("../assets/redux-thunk.gif"),
  reduxThunkTest: require("../assets/redux-thunk-testing.png"),
  reduxSaga: require("../assets/redux-saga.gif"),
  reduxSagaTest: require("../assets/redux-saga-test.png"),
  reduxObservable: require("../assets/redux-observable.gif"),
  reduxObservableTest: require("../assets/redux-observable-test.png"),
  reduxPromise: require("../assets/redux-promise.gif"),
  reduxPromiseTest: require("../assets/redux-promise-test.png"),
  reduxPromiseTestBetter: require("../assets/redux-promise-test-better.png"),
  patternfly: require("../assets/patternfly-orb.svg"),
  rain: require("../assets/rain.jpg"),
  reduxSimple: require("../assets/redux-simple.png"),
  mappingWizard: require("../assets/mappingWizard.gif"),
  magic_school_bus: require("../assets/magic_school_bus.jpg"),
  timeTravel: require("../assets/time-travel.gif"),
  reactDevTools: require("../assets/react-dev-tools.png"),
  setItFree: require("../assets/set-it-free.jpg"),
  pyramid: require("../assets/pyramid.png"),
  snapshot: require("../assets/snapshot.png"),
  updateSnapshot: require("../assets/updateSnapshot.png")
};

require("../assets/freezeFrame.js");

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.freezeFrame = this.freezeFrame.bind(this);
  }
  freezeFrame() {
    setTimeout(() => {
      $(".freezeframe").freezeframe();
    });
  }
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Re·dux
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            (from Latin <i>reducere</i>, "to bring back")
          </Text>
          <br />
          <br />
          <Text margin="10px 0 0" textColor="quarternary" textSize={20}>
            By: Patrick Riley
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              Redux provides a solid, stable and mature solution to managing
              state in your React application.
            </Quote>
            <Cite>Dan Abramov</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.rain} />
        <Slide transition={["fade"]}>
          <Image src={images.reduxSimple} width={900} height={396} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Some Redux middlewares we are currently exploring:
          </Heading>
          <List>
            <ListItem>Redux Thunk</ListItem>
            <ListItem>Redux Saga</ListItem>
            <ListItem>Redux Observable</ListItem>
            <ListItem>Redux Promise</ListItem>
          </List>
        </Slide>

        {/** Redux Thunk **/}
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image className="freezeframe" src={images.reduxThunk} height={500} />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/store")}
          ranges={[
            { loc: [0, 1], title: "STORE" },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [2, 3], note: "Just an extension to redux thunk!" },
            { loc: [3, 4] },
            { loc: [4, 6] },
            { loc: [6, 8] },
            { loc: [13, 22] }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/provider")}
          ranges={[
            { loc: [0, 1], title: "PROVIDER" },
            { loc: [1, 2] },
            { loc: [4, 5] },
            { loc: [6, 13] }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/action")}
          ranges={[{ loc: [0, 1], title: "ACTION" }, { loc: [1, 7] }]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/constants")}
          ranges={[{ loc: [0, 4], title: "CONSTANTS" }]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/reducer")}
          ranges={[
            { loc: [0, 0], title: "REDUCER" },
            { loc: [0, 1], note: "All reduced state should be immutable!" },
            { loc: [8, 13] },
            { loc: [13, 20] },
            { loc: [20, 22] },
            { loc: [22, 24] },
            { loc: [24, 26] }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/connected")}
          ranges={[
            { loc: [0, 0], title: "CONTAINER" },
            { loc: [0, 1] },
            { loc: [1, 2] },
            {
              loc: [5, 12],
              note: "Use selectors to filter incoming reduced state!"
            },
            { loc: [16, 19] }
          ]}
        />
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            className="freezeframe"
            src={images.mappingWizard}
            height={537}
            width={1125}
          />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Thunk
          </Heading>
          <List>
            <ListItem textColor="#009900">Good things:</ListItem>
            <br />
            <List>
              <ListItem>We're all familiar with promises</ListItem>
              <ListItem>Easy to test in isolation</ListItem>
              <ListItem>Not much boilerplate</ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Thunk
          </Heading>
          <List>
            <ListItem textColor="#D00000">Bad things:</ListItem>
            <br />
            <List>
              <ListItem>We have to use promises</ListItem>
              <ListItem>
                Chaining actions can get complicated (you'll use{" "}
                <a href="https://github.com/theforeman/foreman/blob/develop/webpack/assets/javascripts/react_app/redux/actions/notifications/index.js#L21">
                  promise chains
                </a>)
              </ListItem>
            </List>
          </List>
        </Slide>

        {/** Redux Saga **/}
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image className="freezeframe" src={images.reduxSaga} height={500} />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/saga")}
          ranges={[
            { loc: [0, 0], title: "SAGA" },
            { loc: [0, 1] },
            {
              loc: [13, 21],
              note: "Generators make async actions appear synchronous"
            },
            {
              loc: [21, 32]
            },
            { loc: [37, 42] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Saga
          </Heading>
          <List>
            <ListItem textColor="#009900">Good things:</ListItem>
            <br />
            <List>
              <ListItem>
                Generators/yield make async operations a breeze
              </ListItem>
              <ListItem>
                You can get much better test coverage of the store
              </ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Saga
          </Heading>
          <List>
            <ListItem textColor="#D00000">Bad things:</ListItem>
            <br />
            <List>
              <ListItem>You have much more boilerplate</ListItem>
              <ListItem>Starts to feel like pub/sub...</ListItem>
              <ListItem>Confusing for beginners</ListItem>
            </List>
          </List>
        </Slide>

        {/** Redux Observable **/}
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            className="freezeframe"
            src={images.reduxObservable}
            height={500}
          />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/observable")}
          ranges={[
            { loc: [0, 0], title: "OBSERVABLE" },
            {
              loc: [0, 1],
              note:
                "RxJS uses '$' to identify variables that reference a stream."
            },
            {
              loc: [1, 7]
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Observable
          </Heading>
          <List>
            <ListItem textColor="#009900">Good things:</ListItem>
            <br />
            <List>
              <ListItem>Uses RxJS.</ListItem>
              <ListItem>
                You can finally handle a stream of actions easily.
              </ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Observable
          </Heading>
          <List>
            <ListItem textColor="#D00000">Bad things:</ListItem>
            <br />
            <List>
              <ListItem>
                <quote>
                  <i>
                    "Testing async code that creates side effects isn't easy.
                    We're still learning the best way to test Epics."
                  </i>
                </quote>
              </ListItem>
            </List>
          </List>
        </Slide>

        {/** Redux Promise Middleware **/}
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            className="freezeframe"
            src={images.reduxPromise}
            height={500}
          />
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/promise")}
          ranges={[
            { loc: [0, 0], title: "PROMISE" },
            {
              loc: [1, 2],
              note: "API request has been abstracted with axios"
            },
            {
              loc: [10, 11],
              note: "Action creator called by view."
            },
            {
              loc: [11, 14],
              note: "Dispatch base action with promise payload."
            },
            {
              loc: [15, 19]
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Promise
          </Heading>
          <List>
            <ListItem textColor="#009900">Good things:</ListItem>
            <br />
            <List>
              <ListItem>
                Removes a lot of additional boilerplate from Saga
              </ListItem>
              <ListItem>Just an extension to thunk</ListItem>
              <ListItem>Chaining actions with async/await</ListItem>
              <ListItem>Easy to use with axios/mock-redux-store</ListItem>
              <ListItem>Easier for beginners</ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Promise
          </Heading>
          <List>
            <ListItem textColor="#D00000">Bad things:</ListItem>
            <br />
            <List>
              <ListItem>redux-mock-store does not accept reducers</ListItem>
              <ListItem>Not much else so far...</ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Debugging
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.magic_school_bus} />
        <Slide
          onActive={this.freezeFrame}
          transition={["zoom"]}
          bgColor="primary"
        >
          <Image
            className="freezeframe"
            src={images.timeTravel}
            height={516}
            width={916}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.reactDevTools} height={618} width={944} />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Testing
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.setItFree} height={600} width={800} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.snapshot} height={624} width={860} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.updateSnapshot} height={406} width={772} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.pyramid} height={630} width={1000} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            className="freezeframe"
            src={images.reduxThunkTest}
            height={500}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            className="freezeframe"
            src={images.reduxSagaTest}
            height={500}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            className="freezeframe"
            src={images.reduxObservableTest}
            height={500}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            className="freezeframe"
            src={images.reduxPromiseTest}
            height={500}
          />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/actionTest")}
          ranges={[
            { loc: [0, 0], title: "Action Test" },
            {
              loc: [0, 1],
              note: "Create mock store with redux-mock-store"
            },
            {
              loc: [4, 8],
              note: "Fixtures for initial state and response data."
            },
            {
              loc: [13, 16],
              note: "Insert our middlewares into the mock store the same way."
            },
            {
              loc: [24, 29],
              note: "Mock the response with axios."
            },
            {
              loc: [29, 35],
              note:
                "Call the action creator and then snapshot the additional actions created."
            }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/actionTestSnapshot")}
          ranges={[
            { loc: [0, 1], title: "Action Test Snapshot" },
            {
              loc: [4, 8],
              note: "Snapshot shows that the PENDING action was fired."
            },
            {
              loc: [34, 38],
              note: "The FULFILLED action fired after 200 response."
            },
            {
              loc: [47, 51],
              note: "The REJECTED action fired after 404 response."
            }
          ]}
        />

        <Slide transition={["zoom"]} bgColor="primary">
          <Image
            className="freezeframe"
            src={images.reduxPromiseTestBetter}
            height={500}
          />
        </Slide>

        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/integrationTest")}
          ranges={[
            { loc: [0, 0], title: "Integration Test" },
            {
              loc: [3, 4],
              note: "Create a real redux store."
            },
            {
              loc: [4, 5],
              note: "Use Enzyme for mounting our connected component."
            },
            {
              loc: [19, 27],
              note: "Generate the store with our reducers integrated."
            },
            {
              loc: [28, 34],
              note: "Mount the container component injecting the redux store."
            },
            {
              loc: [36, 41],
              note:
                "IMPORTANT: Find the unconnected component after it has rendered."
            },
            {
              loc: [42, 43],
              note: "Snapshot the reduced state from mapStateToProps."
            }
          ]}
        />
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/integrationTestSnapshot")}
          ranges={[
            { loc: [0, 1], title: "Integration Test Snapshot" },
            {
              loc: [2, 7],
              note: "Snapshot shows the connected/reduced state."
            }
          ]}
        />

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            References
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Saga
          </Heading>
          <List>
            <ListItem textColor="#000">Links:</ListItem>
            <br />
            <List>
              <ListItem>
                <a href="https://github.com/patternfly/patternfly-react-demo-app/blob/master/src/sagas/index.js">
                  Simple example
                </a>
              </ListItem>
              <ListItem>
                <a href="https://github.com/vojtechszocs/react-playground/tree/master/src">
                  More examples
                </a>
              </ListItem>
              <ListItem>
                <a href="https://redux-saga.js.org/docs/advanced/Testing.html">
                  Writing Tests
                </a>
              </ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Observable
          </Heading>
          <List>
            <ListItem textColor="#000">Links:</ListItem>
            <br />
            <List>
              <ListItem>
                <a href="https://redux-observable.js.org/docs/recipes/WritingTests.html">
                  Writing Tests
                </a>
              </ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Redux Promise
          </Heading>
          <List>
            <ListItem textColor="#000">Links:</ListItem>
            <br />
            <List>
              <ListItem>
                <a href="https://github.com/priley86/miq_v2v_ui_plugin/blob/master/app/javascript/redux/actions/mappingWizard/mappingWizard.test.js">
                  A simple example with axios
                </a>
              </ListItem>
              <ListItem>
                <a href="https://kentcdodds.com/post/write-integration-tests/">
                  Write tests, not too many, mostly integration.
                </a>
              </ListItem>
              <ListItem>
                <a href="https://hackernoon.com/low-effort-high-value-integration-tests-in-redux-apps-d3a590bd9fd5">
                  High Value Integration Tests
                </a>
              </ListItem>
            </List>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Thank You
          </Heading>
          <Text>
            This presentation was built with: <br />
            💖{" "}
            <a href="https://github.com/FormidableLabs/spectacle">
              Spectacle
            </a>{" "}
            💖
          </Text>
        </Slide>
      </Deck>
    );
  }
}
