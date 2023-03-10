import { Image } from "./icons";

const {
    PHPIcon,
    LaravelIcon,
    CSharpIcon,
    NodeJsIcon,
    MySqlIcon,
    MongoDbIcon,
    VueJSIcon,
    JavascriptIcon,
    TypeScriptIcon,
    TailwindIcon,
    BootstrapIcon,
    HtmlIcon,
    CssIcon,
    GitHubIcon,
    VscodeIcon,
    SublimeTextIcon,
    PostmanIcon,
} = Image

const backend = [
    {
        name: 'PHP',
        image: PHPIcon,
    },
    {
        name: 'Laravel',
        image: LaravelIcon,
    },
    {
        name: 'C#',
        image: CSharpIcon,
    },
    {
        name: 'NodeJs',
        image: NodeJsIcon,
    },
    {
        name: 'MySql',
        image: MySqlIcon,
    },
    {
        name: 'MongoDb',
        image: MongoDbIcon,
    },
];

const frontend = [
    {
        name: 'Vuejs',
        image: VueJSIcon,
    },
    {
        name: 'Javascript',
        image: JavascriptIcon,
    },
    {
        name: 'TypeScript',
        image: TypeScriptIcon,
    },
    {
        name: 'Tailwind',
        image: TailwindIcon,
    },
    {
        name: 'Bootstrap',
        image: BootstrapIcon,
    },
    {
        name: 'HTML',
        image: HtmlIcon,
    },
    {
        name: 'CSS',
        image: CssIcon
    }
];

const tools = [
    {
        name: 'Github',
        image: GitHubIcon,
    },
    {
        name: 'VSCode',
        image: VscodeIcon,
    },
    {
        name: 'Sublime Text',
        image: SublimeTextIcon,
    },
    {
        name: 'Postman',
        image: PostmanIcon,
    }
];

export const skills = {
    frontend,
    backend,
    tools,
}