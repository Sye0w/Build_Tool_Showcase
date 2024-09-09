import buildTools from '../data/build-tools.json';

export const Content = () => `
  <main>
    <ul>
      ${
        buildTools.map(
            tool => `<li>${tool.name}</li>`
        ).join('')
      }
    </ul>
  </main>
`;
