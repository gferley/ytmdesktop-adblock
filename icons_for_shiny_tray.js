const icons = new Image(); // icons for YTMD
icons.src = 'data:image/png;base64,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'

const pause = new Image(); // Pause icon
pause.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAALElEQVR4AWMYQeD///8KQOwAxQq4xQkb1PAfARpwiQ9Kg0YNGjWI8iwycgAA8BVdyMCA4SwAAAAASUVORK5CYII=';
//
const play = new Image(); // Play icon
play.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAATklEQVR4AWMYgeD///8C1DLoARA7UG4QAqynyHX/UcF7II6n3CAE2A/ECpQbhHBdPTUM+gDEDZQadIB8ryFckUBpYG8ARf/AJ0i4K0YBAOu3zFnxHnpDAAAAAElFTkSuQmCC';

exports.icons = icons;
exports.pause = pause;
exports.play = play;
