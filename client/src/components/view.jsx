import { createContext } from 'react';
import { StyledView } from './style';

const ViewContext = createContext();

const View = ({ title, display: DisplayComponent }) => {
  document.title = title;

  const context = {
    // Add global methods/vars here
  };

  return (
    <ViewContext.Provider value={context}>
      {/* DisplayComponent is nothing but the view pass throw it */}
      <StyledView>{DisplayComponent && <DisplayComponent />}</StyledView>
    </ViewContext.Provider>
  );
};

export { View, ViewContext };
