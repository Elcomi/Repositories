# Project Title

Repositories

# Project Description

The idea of this project is to implement a solution for discovering popular repositories on GitHub.

- my application display A list of the most popular repositories, sorted by number of stars.
- An option to be able to view the top 1 , 10, 50, 100 repositories should be available.
- An option to be able to view the repositories of specafic date onwards
- A filter for the programming language.
- i handle great load of requests per second by using flat list instead of using scroll view because scroll view renders all of the items up front and the FlatList component is a better choice, because it lazy loads the list items, as they appear on the screen. Further, it deletes them when they are no longer displayed

## Demo for project

## libraries

- react-native-modal-datetime-picker
- react-native-modal-dropdown
- react-native-vector-icons
- yarn

## How to Run the Project

    run these commands ( yarn & npx react-native start & npx react-native run-android )

    yarn: for install dependencies and node modules
    npx react-native start : for starting Metro Bundler.
    npx react-native run-android: Start your application on android emulator

## explan the code structure

i have (src) folder that contain all code

- inside (src) i have 5 folders
  (components): that contain all reusable components that can be used in whole application
  (navigation): that contain my navigation structure so in future i can scale my navigation to contain more tabs and stacks
  (screens): that contains the stand out screens of the project and controol how it displayed based on navigation logic
  (service): that contains the logic of fetching data and the loading state , so i fetching all urls in this file and just pass params to ulrs , so i can filter and sort data only from UrL
  (theme): that contain all files of our theme system like colors file on it that contain our most common colors and use this colors on whole application by this file make us if our brand colors changes can only change colors from one place not from whole app

- inside (components) folder i have 2 folders and 3 files
  (header): that contain logo file seprated so can make more logic on it in future and index for display logo and search component both
  (reposCard): that contain 2 folders and index file
  (styles) folder : contain the different styles of this card because in our app we have 2 screens ( explore & repositories ) and both of them have a same card with some difference so in future if we have the same card displayed in other place with some changes we cann add extra style for it in this folder
  (common) folder : contains the common components that exist in styles files
  (index) file : it contains the data that will be displayed then pass this data as a props to the styles of card and also contain the logic of switching between the styles of repos card based on props called type
  (EmptyPage) : component for display it if no data in screens
  (selector) : this a component for selecting items i used (react-native-modal-dropdown) library to implement this component , this component contain (setValue,items,label ,initialVal,isSearchExist) props
  (setValue) : is a callback function props that change the state of parent component by passing data from child component(Selector component)
  (items) prop : that passing array of data to dropdown list of selector
  (label) prop : for changing the placeHolder of selector
  (initialVal) prop to set the initialValue of selector
  (isSearchExist) prop for displaying search bar

  - inside (screens) folder i have 2 files:
    (exploreScreen) : that contain a filter by ( top 10 , 50, ...) , if no data exist the empty screen will appear ,
    the shape of data that i passed to selector component is object that contain two key , label for display text and value for display number that will pass it as a parameter to api then to URL to display the filtered data base on URL , in selector component i pass a callback function to setValue prop , this callback function take the value of it from (onSelect) prop of selector component that return an index of selected value then i filter it using find method by find the label of my items that === to this value then take the value of this label and pass it to perPage state that pass it to (useGetReposSortedByStars) api

    (exploreScreen) : that contain a two filter one by language and onother one by date, if no data exist the empty screen will appear ,
    the shape of data that i passed to selector component is array that have items will pass it as a parameter to api then to URL to display the filtered data base on URL , in selector component from (onSelect) prop of selector component that return an index of selected value then i take this value and pass it to language state that pass it to
    (useGetReposWithFilters) api ,

    i take the date from date picke using this library (react-native-modal-datetime-picker) then pass it to date state that pass it to (useGetReposSortedByStars) api to filter data based on URL
