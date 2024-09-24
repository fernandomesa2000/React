
import "../../App.css";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { UserProvider, useUser } from "./UserContext";
import Switch from "./Switch";

const LoggedUser = () => {
  const {user} = useUser();
  const {theme} = useTheme();
  return (
    <p
    style={{
      color: theme === "light" ? "black" : "white",
      className: "UserName"
    }}>
      Hello <span>{user.name}</span>
    </p>
  )
}

const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
      <LoggedUser/>
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
      <Paragraph>Created by {user.name}</Paragraph>
    </div>
  );
};

function ThemeSwitch() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <ThemeProvider>
        <ThemeSwitch />
      </ThemeProvider>
    </UserProvider>
  );
}

export default Root;

