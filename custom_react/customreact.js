

// function customRender (reactElement, container) {
// ! first method
//   const domElement = document.createElement (reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   domElement.setAttribute ('href', reactElement.props.href);
//   domElement.setAttribute ('target', reactElement.props.target);
//   container.appendChild (domElement);

// ! second method
//   const domElement = document.createElement (reactElement.type);
//   domElement.innerHTML = reactElement.children;
//   for (const prop in reactElement.props) {
//     if (prop === 'children') continue;
//     domElement.setAttribute (prop, reactElement.props[prop]);
//   }
//   container.appendChild (domElement);
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https/www.google.com',
//     target: '_blank',
//   },
//   children: 'cleck to be visited google',
// };

// const mainContainer = document.querySelector ('#root');
// customRender (reactElement, mainContainer);

// ! pratice work
function customRender (reactElement, container) {
  const domElement = document.createElement (reactElement.type);

  // Props handle
  for (const prop in reactElement.props) {
    domElement.setAttribute (prop, reactElement.props[prop]);
  }

  // Children handle
  if (typeof reactElement.children === 'string') {
    domElement.textContent = reactElement.children;
  } else if (Array.isArray (reactElement.children)) {
    reactElement.children.forEach (child => customRender (child, domElement));
  }

  container.appendChild (domElement);
}

const reactElement = {
  type: 'div',
  props: {},
  children: [
    {
      type: 'h1',
      props: {},
      children: 'Hello Custom React!',
    },
    {
      type: 'p',
      props: {},
      children: 'my name is Bilal',
    },
    {
      type: 'a',
      props: {href: 'https://www.google.com', target: '_blank'},
      children: 'Click to visit Google',
    },
  ],
};

const mainContainer = document.querySelector ('#root');
customRender (reactElement, mainContainer);
