import { Like } from './likes-class';

let component = new Like(100, false);

component.onClick();

console.log(`likesCount: ${component.likesCount} , isSelected: ${component.isSelected}`);
