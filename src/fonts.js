import { createGlobalStyle } from 'styled-components';
import organicRelief from './assets/fonts/OrganicRelief.ttf';
import quickens from './assets/fonts/QUICKENS.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Organic Relief';
        src: url(${organicRelief}) format('truetype');
    }
    @font-face {
        font-family: 'Quickens';
        src: url(${quickens}) format('truetype');
    }
`;

export default FontStyles;
