const options: ShowUIOptions = {
  width: 250,
  height: 200,
};

figma.showUI(__html__, options);

figma.ui.onmessage = msg => {
  switch (msg.type) {
    case 'create-rectangles':
      const nodes: SceneNode[] = [];
      for (let i = 0; i < msg.count; i++) {
        const rect = figma.createRectangle();
        rect.x = i * 150;
        rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
        figma.currentPage.appendChild(rect);
        nodes.push(rect);
      }
      figma.currentPage.selection = nodes;
      figma.viewport.scrollAndZoomIntoView(nodes);
      break;
    default:
      break;
  }

  figma.closePlugin();
};
