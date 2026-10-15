import { Image } from "./icons";

const {
    LaravelIcon,
    CSharpIcon,
    MySqlIcon,
    SqlIcon,
    MongoDbIcon,
    VueJSIcon,
    JavascriptIcon,
    TypeScriptIcon,
    TailwindIcon,
    BootstrapIcon,
    HtmlIcon,
    CssIcon,
} = Image

const backend = [
    {
        name: 'Laravel',
        image: LaravelIcon,
    },
    {
        name: 'C#',
        image: CSharpIcon,
    },
    {
        name: 'SQL',
        image: SqlIcon,
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

export const skills = {
    frontend,
    backend,
}