# Documentation - Generator
## Number Shifting Rules
- Generate one Digit into one Field foreach Squares, then go to next Number.
- Starting point for digit: 
  - random not blocked position in square-0.
- Remaining points for digit: 
  - within row: vertical position +1 (from last square) 
  - new row: horizontal position +1 (from last row)
- If position > 9 then position = 0; (or use modulo)
___
## Number Shifting Preview

	4 1 2    7 8 9    3 5 6
	3 5 6    4 1 2    7 8 9
	7 8 9    3 5 6    4 1 2

	9 4 1    6 7 8    2 3 5 
	2 3 5    9 4 1    6 7 8
	6 7 8    2 3 5    9 4 1

	8 9 4    5 6 7    1 2 3 
	1 2 3    8 9 4    5 6 7
	5 6 7    1 2 3    8 9 4

___

	
## Number Shifting Output

	4 1 2 7 8 9 3 5 6
	3 5 6 4 1 2 7 8 9
	7 8 9 3 5 6 4 1 2
	9 4 1 6 7 8 2 3 5 
	2 3 5 9 4 1 6 7 8
	6 7 8 2 3 5 9 4 1
	8 9 4 5 6 7 1 2 3 
	1 2 3 8 9 4 5 6 7
	5 6 7 1 2 3 8 9 4