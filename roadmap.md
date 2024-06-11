Goals:
> Grouping draggables
> Convert settings to Enum type
> Adding in detail window on click
 - Display amount an extra info -> able to change
> JSON import & export
> User Management system
 - Admin
  -- Add in draggables (by group aswell)
 - User
  -- Registered
  -- Non-registered
  -- Monitor activity
 - Allow request to add icons
  -- limit amount && img size
> Line(s)
 - Add in line mode (toggle individual && global)
  -- Straight (v) 
  -- Curve
  -- L-shaped 
 - Take in account other items (around other draggable)
 - draggable drop on line cause break and add in between the line creating a new endpoint 
   O -- O -> O - O - O
 - Prevent duplicate line creation
 - on line select allow following actions:
  -- adding in description
  -- remove
  -- add in split (?) in future 
> Add in number at bottom (indicating x amount) (V)
> actions on card itself (consist of):
 - draw line
 - remove action
> on empty line trigger request:
 - delete line (aka no new draggable)
 - add new draggable
> Add in hover info / more info on menu add
> Switch from vuetify component to self made css (lose vuetify dependancy)
> review json export file
> image caching