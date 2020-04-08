# Documentation - Renderer

## Instance Variables
Following variables hold generated DOM-Nodes in Arrays.
- Squares
  - Contains all rendered Squares
  - Assigned to every Square
  - Inherited in every Field
- Fields
  - Containts all rendered Fields
  - Assigned to every Field
___

## Render Functions
- Create Element
  - Creates an HTML element
  - Calls AppendChild to attach itself to the DOM
  - Optionally calls CreateNode which then calls AppendChild
  - Optionally calls AppendClasses
- Append Child
  - Appends a Child element to a parent Element
- Append Classes
  - Optionally appends an Array of Classes to the HTML element
- Create Node
  - Optionally creates a (text)-Node for the HTML element
  - Calls AppendChild to attach itself to the created Element
___

## Core Functions
- Render Grid
  - Calls CreateElement 9 times in a loop to create Squares.
  - Calls GetSquarePosition for every square to attach position classes.
  - Inside this loop, Calls CreateElement 9 times in a loop to create Fields.
  - Every Created Field and Square gets connected to their Javascript class.
  - Every Square inherits the complete Squares Array
  - Every Field inherits the complete Fields and Squares Array
- Get Square Position
  - Attaches two position classes to a square element.
  - vertical(top, mid, bot) and horizontal(top, center, bot)
  - this turns a class "square"  into "square top left"

___

## Summary

The renderer is responsible for rendering 9 Squares where each square holds 9 Fields.

Everytime a new Square or field is rendered, it gets attached to a new Square() or Field() class.

Now we have 9 Square Classes holding 9 Square DOM Elements. And 81 Field Classes holding 81 Field DOM Elements.

At this point, all essential DOM-Nodes have been rendered. And all essential Classes have been created and connected to their DOM-Nodes. 

The next step after rendering the DOM and connecting it to Javascript is to generate the values for the Grid (see Generator.js).

As a little Bonus: 
- every square holds the list of all squares (same for fields)
- square extends grid and field extens square as partial classes
- squares have a vertical and horizontal classname to describe their position