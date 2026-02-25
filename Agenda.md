# Agenda (SDEV-2150 | A03)

We meet on **Wednesdays** and **Fridays**

> These are my notes on what I plan to teach in each [**upcoming class**](#day-12--feb-25). Also check out the [**Draft Planning Calendar**](./Calendar.md).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)

----

> ## Starter Kits
>
> I provide a number of starter kits through the term, which you can grab using the process described below.
>
> 📖 These starter kits often have lots of `ReadMe.md` files. That means I want you to **read** that information. 👀
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*


----

## Jan-Apr 2026 Schedule

### Day 1 | Jan 09

- **Today**
  - Course Introduction
  - Confirm GitHub Account and Software Setup
    - VS Code **Profiles**
  - Workbook Setup
    - Instructor Workbook
- **Homework:**
  - Refer to my [**system setup guide**](https://dgilleland.github.io/CPSC-1520/tutorials/0010/) if you have any problems/issues with your software.


----

### Day 2 | Jan 14

- **Today**
  - Confirm GitHub Account and Software Setup
    - VS Code **Profiles**
  - Workbook Setup
    - Student Workbook
    - Instructor Workbook
  - Terminal commands (review)
  - JavaScript (review)
- **Homework**

### Day 3 | Jan 16

- **Today**
  - Our "Day 1" JavaScript Review

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-01/example/lesson-01-starter ./src/lesson-01
    ```

  - Our "Day 2" JavaScript Review - Web Components

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-02/example/lesson-02-starter ./src/lesson-02
    ```

- **Homework**


----

### Day 4 | Jan 21

- **Today**
  - Our "Day 2" JavaScript Review - Complete the **Web Components and Composition**

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-02/example/lesson-02-starter ./src/lesson-02
    ```

- **Homework**
  - Scan and **bookmark** the [web.dev article on **Custom Elements**](https://web.dev/articles/custom-elements-v1)

### Day 5 | Jan 23

- **Announcements**
  - *I posted [the fix from lesson 02](https://github.com/DG-InClass/SDEV-2150-A03-Jan-2026/issues/2).*
  - **Assignment 1 Available**
  - **Quiz 2 Cutoff...**
    - [x] JavaScript and browser environment
    - [ ] Async operations
    - [x] Web components
    - [ ] Events
    - [ ] Design patterns
- **Today**
  - 🙏 Our "Day 3" JavaScript Review - **Reactive Patterns and Advanced UI Communication**

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-03/example/lesson-03-starter ./src/lesson-03
    ```

- **Homework**
  - Try completing the `resource-details.js` by following [these instructions](https://dg-inclass.github.io/sdev-2150/lessons/03/#modify-resource-detailsjs)

----

### Day 6 | Jan 28

- **Today**
  - Our "Day 4" JavaScript Review - [**Advanced UI Communication with Custom Events**](https://dg-inclass.github.io/sdev-2150/lessons/04/)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-04/example/lesson-04-starter ./src/lesson-04
    ```

- **Homework**

### Day 7 | Jan 30

- **Today**
  - Our "Day 5" JavaScript Review - [**Asynchronous Programming Review**](https://dg-inclass.github.io/sdev-2150/lessons/05/)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-05/example/lesson-05-starter ./src/lesson-05
    ```

  - Our "Day 7" React Intro - [**Framework Foundations and Component Building**](https://dg-inclass.github.io/sdev-2150/lessons/07/)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-07/example/lesson-07-starter ./src/lesson-07
    ```

- **Homework**
  - For more on Custom Elements (Web Components), see
    - [These MDN Examples](https://github.com/mdn/web-components-examples)
    - [This MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)
  - *Are you looking to practice/review some JavaScript basics with stand-alone `*.js` files (no HTML/CSS/React/Browser/etc.)? The grab this starter kit!*

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/js-quickstart ./src/js-quickstart
    ```

### Day 8 | Feb 4


- **Today**
  - Continue Lesson 7 to [add TailwindCSS](https://dg-inclass.github.io/sdev-2150/lessons/07/#phase-2-configuring-tailwind-css)
  - Continue Lesson 7 [for our components](https://dg-inclass.github.io/sdev-2150/lessons/07/#phase-3-creating-static-react-components)
  - Detour to explore with JavaScript Quickstarts
    - If you haven't grabbed the quickstart from the previous day's ***Homework***, do so now.
    - Explore [obj-ref.js](./src/js-quickstart/obj-ref.js)
    - Explore [func-as-obj.js](./src/js-quickstart/func-as-obj.js)
    - Explore [callbacks.js](./src/js-quickstart/callbacks.js)
    - Explore [array-functions.js](./src/js-quickstart/array-functions.js)
- **Homework**
  - Read [Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree)
  - Learn from the **official** docs with [Tic-Tac-Toe](https://react.dev/learn/tutorial-tic-tac-toe). This is a longer tutorial, but it goes over all of the high-points of React and is a great example to introduce and/or reinforce the material in this course.

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/tic-tac-toe ./src/tic-tac-toe
    ```



### Day 9 | Feb 6

- **Today**
  - Lesson 7 - Bootstrap to Tailwind conversion [using AI](./src/lesson-07/frontend-react/DetailsConversion.md)
  - Lesson 8 - [State and Props](https://dg-inclass.github.io/sdev-2150/lessons/08/)

    ```ps
    pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-08/example/lesson-08-starter ./src/lesson-08
    ```

- **Homework**
  - Read [Editor Setup](https://react.dev/learn/editor-setup)
  - Read [React Developer Tools](https://react.dev/learn/react-developer-tools)


### Day 10 | Feb 11

- **Today**
  - ***Check-In***
    - Brightspace
      - Are you encountering any Textbook Readings?
      - Are you seeing any good links/notes in Brightspace?
    - Lesson 9 - [Component Design](https://dg-inclass.github.io/sdev-2150/lessons/09/)

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-09/example/lesson-09-starter ./src/lesson-09
      ```

- **Homework**
  - Explain what is meant by a **Presentational Component**
  - Explore the ideas in the [Student Exercise](https://dg-inclass.github.io/sdev-2150/lessons/09/#student-exercise). What might yo do to create additional components to work with a `<Card>`?


### Day 11 | Feb 13

- **Today**
  - ***Commentary** on where we left off in Lesson 9 in terms of the [page layout](./src/lesson-09/src/components/layout/PageLayout.jsx) and the [App](./src/lesson-09/src/App.jsx).*
  - Lesson 10 - [Styling Components in React](https://dg-inclass.github.io/sdev-2150/lessons/10/)

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-10/example/lesson-10-starter ./src/lesson-10
      ```

- **Homework**
  - Explore the ideas in the [Student Exercise](https://dg-inclass.github.io/sdev-2150/lessons/10/#student-exercise).


### Day 12 | Feb 25

- **Today**
  - *Commentary on Friday Lunch Hour Availablity*
  - Lesson 11

      ```ps
      pnpm dlx tiged --disable-cache --force DG-InClass/SDEV-2150-A03-Jan-2026/sk/day-11/example/lesson-11-starter ./src/lesson-11
      ```

- **Homework**
  - Read about [daisyUI themes](https://daisyui.com/docs/themes/) and explore their [Layout & Typography](https://daisyui.com/docs/layout-and-typography/)
  - Play with various [daisyUI components](https://daisyui.com/components/)

### Day 13 | Feb 27

- **Today**
  - Lesson 12
- **Homework**

### Day 14 | Mar 4

- **Today**
- **Homework**

### Day 15 | Mar 6

- **Today**
- **Homework**

### Day 16 | Mar 11

- **Today**
- **Homework**

### Day 17 | Mar 13

- **Today**
- **Homework**

### Day 18 | Mar 18

- **Today**
- **Homework**

### Day 19 | Mar 20

- **Today**
- **Homework**

### Day 20 | Mar 25

- **Today**
- **Homework**

### Day 21 | Mar 27

- **Today**
- **Homework**

### Day 22 | Apr 1

- **Today**
- **Homework**

### Day 23 | Apr 2

- **Today**
- **Homework**

### Day 24 | Apr 8

- **Today**
- **Homework**

### Day 25 | Apr 10

- **Today**
- **Homework**

### Day 26 | Apr 15

- **Today**
- **Homework**

### Day 27 | Apr 17

- **Today**
- **Homework**

### Day 28 | Apr 22

- **Today**
- **Homework**

### Day 29 | Apr 24

- **Today**
- **Homework**
