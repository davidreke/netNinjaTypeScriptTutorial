// 1. register a list container (ul) in the new constructor
export class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, position) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (position === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
// 2. Creat a render method to render a new 'li' to the container
// accepts arguments: invoice | payment, heading, position
// create teh hetml template
// add the lit template
