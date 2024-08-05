# Web Development Project 2 - Trivia Test

Submitted by: Lou Salvant

The web app is a trivia game featuring randomized flashcards with questions and answers, styled by difficulty, and a distinct "Next" button. It includes a responsive design, hover effects, and a visually appealing background.

Time spent: 2 hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] *visual style implemented*

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDMxNGJhdzkwN3k5bnBxdncwcHJreHgycWxoN21zM2phcjNzM2o1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QUbSdStFEuWaMWhgrE/giphy.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

I encountered problems with the rotation of the flashcard. When flipping the card, the question and answer would appear reveresed. To fix this I added the rotation and backface-visibility property to ensure the back face is hidden during rotation and only the answer appears.

## License

    Copyright [2024] [Lou Salvant]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.