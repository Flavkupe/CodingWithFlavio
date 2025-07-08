import { Link } from 'react-router-dom';
import './TopNav.css';

type NavItemType = { type: 'nav'; label: string; to: string; external?: boolean };
type DividerType = { type: 'divider'; name: string };
type DropdownItem = NavItemType | DividerType;

function NavItem({ label, to, external }: NavItemType) {
    return external ? (
        <a href={to} target="_blank" rel="noopener noreferrer">{label}</a>
    ) : (
        <Link to={to}>{label}</Link>
    );
}

function Dropdown({ label, items }: { label: string; items: DropdownItem[] }) {
    return (
        <li className="dropdown">
            <button className="dropbtn">{label}</button>
            <div className="dropdown-content">
                {items.map((item, index) => (
                    'type' in item && item.type === 'divider' ? (
                        <div key={index} className="dropdown-divider">
                            {item.name}
                        </div>
                    ) : (
                        <NavItem key={index} type="nav" label={item.label} to={item.to} external={item.external} />
                    )
                ))}
            </div>
        </li>
    );
}

function TopNav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">CodingWithFlavio</div>
            <ul className="navbar-links">
                <li><NavItem type="nav" label="Home" to="/" /></li>
                <Dropdown
                    label="Projects"
                    items={[
                        { type: 'divider', name: 'Recent Projects' },
                        { type: 'nav', label: "Homelands: A Running RPG", to: "/homelands", external: false },
                        { type: 'nav', label: "Unity Snippet Library", to: "https://flavkupe.github.io/FKUnitySnippetsWeb", external: true },
                        { type: 'nav', label: "Wikipedia Museum", to: "/wikipedia-museum", external: false },
                        { type: 'divider', name: 'Older Projects' },
                        { type: 'nav', label: "Vegetable Garden", to: "/vegetable-garden", external: false },
                        { type: 'nav', label: "Tipsy Blocks", to: "/tipsy-blocks", external: false },
                    ]}
                />
                <li><NavItem type="nav" label="Homelands: A Running RPG" to="/homelands" /></li>
                <li><NavItem type="nav" label="About Me" to="/about" /></li>
            </ul>
        </nav>
    );
}

export default TopNav;