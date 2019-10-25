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
  Text,
  Markdown
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
  tree: require('../assets/tree.png'),
  pyramid: require("../assets/pyramid.png"),
  npmcharts: require("../assets/npmcharts.png"),
  snapshot: require("../assets/snapshot.png"),
  updateSnapshot: require("../assets/updateSnapshot.png"),
  logo: require("../assets/logo.png"),
  me: require("../assets/me.jpg"),
  abramov: require("../assets/abramov.png")
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
          <Image src={images.logo} />
          <br />
          <Text margin="10px 0 0" textColor="tertiary" size={1}>
            <i>CX Labs UI Architecture</i>
          </Text>

          <Text margin="10px 0 0" textColor="quarternary" textSize={20}>
            Patrick Riley
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary" style={{margin:0, padding:0}}>
          <Heading size={6} textColor="secondary" caps>
            About Me
          </Heading>
          <div style={{display: 'flex', flexDirection: 'columns', justifyContent: 'space-between', alignItems:'stretch', padding: 20}}>
            <div style={{flexBasis: '50%'}}>
            <List style={{margin: '0.5rem auto', display: 'flex', justifyContent: 'space-evenly', alignItems:'stretch', flexDirection: 'column', height: '100%', padding: '10px 0px'}} >
                <ListItem textSize={29}>Software Developer, since 2008</ListItem>
                <br/>
                <ListItem textSize={29}>First job: Lexmark, Firmware team</ListItem>
                <br/>
                <ListItem textSize={29}>NC State Grad Student</ListItem>
                <br/>
                <ListItem textSize={29}>Hobbies: Hiking, Gaming, Entertaining Toddlers</ListItem>
            </List>
            </div>
            <div style={{flexBasis: '35%'}}>
            <Image src={images.me}/>
            </div>
          </div>

        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Outline
          </Heading>
          <List>
            <ListItem>Packages/Monorepo Structure</ListItem>
            <ListItem>UI Frameworks</ListItem>
            <ListItem>GraphQL APIs</ListItem>
            <ListItem>State Management</ListItem>
            <ListItem>Testing</ListItem>
            <ListItem>Performance & Bundling</ListItem>
            <ListItem>UX Documentation</ListItem>
            <ListItem><span style={{ color: 'gray'}}>In the works...</span></ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Monorepos
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              It sucks more, and that’s a good thing..
            </Quote>
            <Cite>Adam Jacob <br/><br/> Link: <a style={{color: '#fff'}} href="https://medium.com/@adamhjk/monorepo-please-do-3657e08a4b70">Monorepos, Please Do!</a></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
        <Heading size={6} caps lineHeight={1} textColor="#009900">
            Monorepos encourage:
          </Heading>
          <List>
            <ListItem>Shared dependencies</ListItem>
            <ListItem>Increased awareness, trade-offs more visible</ListItem>
            <ListItem>Building all app dependencies together for better reliability</ListItem>
            <ListItem>Consistent tooling globally (Prettier, Eslint, etc.)</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={images.tree}  />
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            UI Frameworks
          </Heading>
        </Slide>
        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
              Current UI Frameworks & Tools:
            </Heading>
            <List>
              <ListItem>Cisco UI Kit 2.0 & Sass CSS preprocessor</ListItem>
              <ListItem>React / React Hooks, <i>16.10</i></ListItem>
              <ListItem>React Bootstrap & React Router</ListItem>
              <ListItem>Typescript 3.7 beta</ListItem>
              <ListItem>Storybook for component demonstration</ListItem>
              <ListItem>Create React App (Facebook App Template)</ListItem>
            </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Image src={images.npmcharts} />
        </Slide>
        <Slide>
          <Heading size={6} caps lineHeight={1} textColor="tertiary">
              Why is React still #1?:
            </Heading>
            <br />
            <List>
              <ListItem>Virtual DOM / JSX</ListItem>
              <br />
              <ListItem>Great tooling (React DevTools, CRA, etc.) </ListItem>
              <br />
              <ListItem>Stable upgrade paths</ListItem>
              <br />
              <ListItem>Composition over Inheritance</ListItem>
              <br />
              <ListItem>Simplicity: we only reason about "props" and "state"</ListItem>
              <br />
            </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Demo Storybook UI
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            GraphQL APIs
          </Heading>
        </Slide>     
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Graphql UI Tools
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}>Apollo Client, Apollo Link for GraphQL API consumption.</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}><i>@apollo/react-testing</i> for Apollo MockProvider.</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}>GraphQL Codegen for generating Apollo React Hooks.</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Graphql Schema Types
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}>Schema Definition Language (SDL), <i>.graphql</i> file</ListItem>
            <ListItem style={{fontSize: 28}}>GraphQL.js GraphQLSchema object</ListItem>
            <ListItem style={{fontSize: 28}}>Introspection Query Result, <i>.json</i> file</ListItem>
            <br/ >
            <div style={{fontSize: 28}}>
              <a href="https://blog.apollographql.com/three-ways-to-represent-your-graphql-schema-a41f4175100d">https://blog.apollographql.com/three-ways-to-represent-your-graphql-schema-a41f4175100d</a>
            </div>
          </List>
        </Slide>        
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Schema Defintion Language
          </Heading>
          <br/>
          <div style={{textAlign: 'center'}}>
          <Markdown textSize={16} textAlign={'left'} bgColor="#000" padding={20}>
            {`
            type Author {
              id: Int!
              firstName: String
              lastName: String
              posts: [Post]
            }
            type Post {
              id: Int!
              title: String
              author: Author
              votes: Int
            }
            type Query {
              posts: [Post]
              author(id: Int!): Author
            }
            `}
          </Markdown>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            GraphQL Schema Object
          </Heading>
          <br/>
          <div style={{textAlign: 'center'}}>
          <Markdown textSize={16} textAlign={'left'} bgColor="#000" padding={20}>
            {`
              const {
                GraphQLObjectType,
                GraphQLSchema,
                GraphQLNonNull,
                GraphQLInt
              } = require("graphql");

              const queryType = new GraphQLObjectType({
                name: "Query",
                fields: {
                  posts: {
                    type: postType
                  },
                  author: {
                    name: "author",
                    type: authorType,
                    arguments: { id: { type: new GraphQLNonNull(GraphQLInt) } }
                  }
                }
              });
            `}
          </Markdown>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Introspection Query Result
          </Heading>
          <br/>
          <div style={{textAlign: 'center'}}>
          <Markdown textSize={16} textAlign={'left'} bgColor="#000" padding={20}>
            {`
              {
                "__schema": {
                  "queryType": {
                    "name": "QueriesHolder"
                  },
                  "mutationType": {
                    "name": "MutationsHolder"
                  },
                  "subscriptionType": null,
                  "types": [
                    {
                      ...
            `}
          </Markdown>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Graphql Generation Process
          </Heading>
          <List ordered>
            <ListItem style={{fontSize: 28}}>Run Introspection Query to download <i>schema.json</i> file</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}>Specify the Queries, Mutations, Subscriptions for generation in <i>graphql-tags</i></ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}><i>Optional:</i> Include localSchema.graphql for "mocked" APIs</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}>Generate Typescript Types & React Hooks for Queries, Mutations, Subscriptions using graphql-codegen</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Demo GraphQL Generation
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            State Management
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Methods
          </Heading>
          <List ordered>
            <ListItem style={{fontSize: 28}}>React <i>useReducer</i> & <i>useState</i> hooks combined w/ React <i>useContext</i>.</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}>React DevTools & <a href="https://github.com/reactrewind/react-rewind">React Rewind</a></ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}>Redux? I don't think we need it, yet.
              <List>
                <ListItem style={{fontSize: 28}}><a href="https://kentcdodds.com/blog/application-state-management-with-react">https://kentcdodds.com/blog/application-state-management-with-react</a></ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <CodeSlide
          bgColor="secondary"
          transition={["slide"]}
          lang="js"
          code={require("raw-loader!../assets/useContext")}
          ranges={[
            { loc: [0, 1], title: "SidebarNavContext" },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [6, 13], note: "Provider holds the stateful values." },
            { loc: [13, 14], note: "'use' function exposes state objects and callbacks to other components." },
            { loc: [14, 24] },
            { loc: [24, 25] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Consuming the SidebarNav Context
          </Heading>
          <br/>
          <div style={{textAlign: 'center'}}>
          <Markdown textSize={16} textAlign={'left'} bgColor="#000" padding={20}>
            {`
    import { useSidebarNavContext } from './SidebarNavContext';

    export const SidebarNav: React.FC<SidebarNavProps> = ({ children, ...props }) => {
      const location = useLocation();
      const { isMini, toggleIsMini } = useSidebarNavContext();
      const sidebarToggleClicked = (e: MouseEvent) => {
        e.preventDefault();
        toggleIsMini();
      };
      return (
        &lt;Sidebar className="col-md-1 col-lg-3 col-xl-2" mini={isMini} {...props}&gt;
          &lt;Sidebar.Header className="hidden-md-down"&gt;
            &lt;Sidebar.Toggle isMini={isMini} onClick={e => sidebarToggleClicked(e)} /&gt;
          &lt;/Sidebar.Header&gt;
        ...
      );
            `}
          </Markdown>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Testing
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.pyramid} height={630} width={1000} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Testing Tools
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}><i>@apollo/react-testing</i> for Apollo MockProvider.</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Jest <a href="https://jestjs.io/docs/en/expect">Expect</a>, Jest Snapshots, Coverage.</ListItem>
            <br/>
            <ListItem style={{fontSize: 28}}><a href="https://testing-library.com/docs/react-testing-library/intro">React Testing Library</a>, uses <i>data-test-id</i> attributes for integration tests.</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Coming soon: Puppeteer / Chrome Headless</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Demo Testing Tools
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Performance & Bundling
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Methods
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}>Code Splitting: <i>React.lazy</i> / React Suspense</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Sourcemap Explorer</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Coming soon: Puppeteer bundle analyzer</ListItem>
          </List>
        </Slide>    
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Image src={images.abramov} height={500} />
          <br />
          <a href="https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html">https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html</a>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="primary">
            Demo Sourcemap Explorer
          </Heading>
        </Slide>    
        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            UX Documentation
          </Heading>
          <br />
          <a href="https://calo-docs.cisco.com/doku.php?id=internal:at_team:labautomation:ux_architecture">
          https://calo-docs.cisco.com/doku.php?id=internal:at_team:labautomation:ux_architecture
          </a>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Coming Soon...
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}>CI Integration / Package releases</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Environment Setup Scripts</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>E2E Testing - Puppeteer / Puppeteer Jest</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>IPAM Concepts / IPAM UI</ListItem>
          </List>
        </Slide> 
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            I Want Your Feedback
          </Heading>
          <List>
            <ListItem style={{fontSize: 28}}>Questions?</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Suggestions?</ListItem>
            <br />
            <ListItem style={{fontSize: 28}}>Ideas...</ListItem>
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
