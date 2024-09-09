import './styles.scss';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';

document.body.innerHTML = `${Header()}${Content()}${Footer()}`;
