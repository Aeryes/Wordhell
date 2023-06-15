// Gameboard component.
'use client'

import { useState, Component } from 'react'
import Alert from '@mui/material/Button';

async function getFile(fileURL){
  let fileContent = await fetch(fileURL);
  fileContent = await  fileContent.text();
  return fileContent;
}

export default class Gameboard extends Component {
  constructor(props) {
    super(props);
    this.state = {showAlert : false, showWin: false, showLoss: false};
    this.rowNumber = 1;
    this.colNumber = 1;
    this.wordcount = 14855;
    this.nextLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
    this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
    this.canMoveNextRow;
    this.wordChosen;
    this.wordUserEntered;
    this.wordArray = [];
    this.boxNum = 0;
    this.cannotBackspace = false;
  }

  // Event handler for populating the array with words and choosing the word for the game.
  handleWordListPopulate = (e) => {
    getFile(e).then(content =>{
      // Using split method and passing "\n" as parameter for splitting
      let array =  content.trim().split("\n");
      this.wordArray = array;
      this.wordChosen = content.trim().split("\n")[Math.floor(Math.random() * array.length)].split('');
      console.log(this.wordChosen);
   }).catch(error =>{
       console.log(error);
   });
  }

  // Function to decide the color of a box.
  handleBoxColor = (boxStart) => {
    // Create two temp arrays for the chosen word and the user entered word.
    let wordChosenTemp = Array.from(this.wordChosen);
    let wordUserTemp =  Array.from(this.wordUserEntered.toLowerCase()); 
    this.boxNum = boxStart;
    let counter = 0;

    // Remove all green matches from both arrays based on index.
    for(let i = 0; i < wordChosenTemp.length; i++) {
      // Increment the box number.
      this.boxNum++;

      if(wordUserTemp[i] == wordChosenTemp[i]) {
        // Remove the index entry from both arrays.
        delete(wordUserTemp[i]);
        delete(wordChosenTemp[i]);

        document.getElementById('box' + this.boxNum).style.borderColor = "#003200";
        counter++;
        // Make sure that the boxNum variable stays under 30.
        if(this.boxNum <= 30) {
          // Letter is in the correct place and box turns green.
        } else {
          this.boxNum = 1;
        }
      }
    }

    // Reset the box number.
    this.boxNum = boxStart;

    // Remove all yellow matches from both arrays based on index.
    for(let i = 0; i < wordChosenTemp.length; i++) {
      let outterLetter = wordChosenTemp[i];
      
      // Reset the box number.
      this.boxNum = boxStart;

      for(let k = 0; k < wordUserTemp.length; k++) {
        // Increment the box number.
        this.boxNum++;

        let innerLetter = wordUserTemp[k];
        
        // Check to see if the inner letter matches the outter letter. If it does then this is a yellow value.
        if(innerLetter == outterLetter && innerLetter != null && outterLetter != null) {
          // Remove array elements from the array.
          delete(wordUserTemp[k]);
          delete(wordChosenTemp[i]);
          document.getElementById('box' + this.boxNum).style.borderColor = "#978200";
        }
      }
    }

    // Reset the box number.
    this.boxNum = boxStart;

    // Assign grey to anything left over.
    for(let i = 0; i < wordUserTemp.length; i++) {
      // Increment the box number.
      this.boxNum++;

      // Check to make sure that the value is not null before assigning the color.
      if(wordUserTemp[i] != null) {
        document.getElementById('box' + this.boxNum).style.borderColor = "#8b8680";

        // Remove array elements from the array.
        delete(wordUserTemp[i]);
        delete(wordChosenTemp[i])
      }
    }
    
    //If every word is green stop the user from moving forward and display a winner messege.
    if(counter == 5) {
      this.setState({showWin: true});
    }
  }
  
  // Event handler for enter keyboard button.
  // TODO --> Add logic for when the player guesses the word correctly or runs out of turns to guess and loses.
  // TODO --> Add logic that prevents the player from backspacing after hitting enter and moving onto a new row.
  handleEnter = () => {
    this.cannotBackspace = true;

    // Row 1
    if(this.currentLocation == 'row1col5') {
      this.wordUserEntered = this.state.row1col1 + this.state.row1col2 + this.state.row1col3 + this.state.row1col4 + this.state.row1col5;

      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {
        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(0);
          this.canMoveNextRow = true;
        }
      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }
    
    // Row 2
    if(this.currentLocation == 'row2col5') {
      this.wordUserEntered = this.state.row2col1 + this.state.row2col2 + this.state.row2col3 + this.state.row2col4 + this.state.row2col5;

      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {
        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(5);
          this.canMoveNextRow = true;
        }
      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }

    // Row 3
    if(this.currentLocation == 'row3col5') {
      this.wordUserEntered = this.state.row3col1 + this.state.row3col2 + this.state.row3col3 + this.state.row3col4 + this.state.row3col5;

      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {
        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(10);
          this.canMoveNextRow = true;
        }

      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }

    // Row 4
    if(this.currentLocation == 'row4col5') {
      this.wordUserEntered = this.state.row4col1 + this.state.row4col2 + this.state.row4col3 + this.state.row4col4 + this.state.row4col5;

      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {

        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(15);
          this.canMoveNextRow = true;
        }
      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }

    // Row 5
    if(this.currentLocation == 'row5col5') {
      this.wordUserEntered = this.state.row5col1 + this.state.row5col2 + this.state.row5col3 + this.state.row5col4 + this.state.row5col5;

      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {
        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(20);
          this.canMoveNextRow = true;
        }
      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }

    // Row 6
    if(this.currentLocation == 'row6col5') {
      this.wordUserEntered = this.state.row6col1 + this.state.row6col2 + this.state.row6col3 + this.state.row6col4 + this.state.row6col5;
      // Check to make sure that the word the user entered is in the list of words.
      if(this.wordArray.indexOf(this.wordUserEntered.toLowerCase()) > -1) {
        if(this.wordChosen != null){
          this.canMoveNextRow = false;
          this.handleBoxColor(25);
          this.canMoveNextRow = true;

          // Check to see if the player lost.
          if(this.state.showWin == false) {
            this.setState({showLoss: true});
          }
        }
      } else {
        this.setState({showAlert: true});
        this.cannotBackspace = false;
      }
    }
  }

  // Event handler for backspace keyboard button.
  handleBackSpace = () => {
    if(this.cannotBackspace == false) {
      // Remove entries up until column 5.
      switch(this.rowNumber) {
        case 1:
          this.setState({row1col1: ''});
          this.setState({row1col2: ''});
          this.setState({row1col3: ''});
          this.setState({row1col4: ''});
          this.setState({row1col5: ''});
          this.rowNumber = 1;
          this.colNumber = 1;
          this.boxNum = 1;
          break;
        case 2:
          this.setState({row2col1: ''});
          this.setState({row2col2: ''});
          this.setState({row2col3: ''});
          this.setState({row2col4: ''});
          this.setState({row2col5: ''});
          this.rowNumber = 2;
          this.colNumber = 1;
          this.boxNum = 6;
          break;
        case 3:
          this.setState({row3col1: ''});
          this.setState({row3col2: ''});
          this.setState({row3col3: ''});
          this.setState({row3col4: ''});
          this.setState({row3col5: ''});
          this.rowNumber = 3;
          this.colNumber = 1;
          this.boxNum = 11;
          break;
        case 4:
          this.setState({row4col1: ''});
          this.setState({row4col2: ''});
          this.setState({row4col3: ''});
          this.setState({row4col4: ''});
          this.setState({row4col5: ''});
          this.rowNumber = 4;
          this.colNumber = 1;
          this.boxNum = 16;
          break;
        case 5:
          this.setState({row5col1: ''});
          this.setState({row5col2: ''});
          this.setState({row5col3: ''});
          this.setState({row5col4: ''});
          this.setState({row5col5: ''});
          this.rowNumber = 5;
          this.colNumber = 1;
          this.boxNum = 21;
          break;
        case 6:
          this.setState({row6col1: ''});
          this.setState({row6col2: ''});
          this.setState({row6col3: ''});
          this.setState({row6col4: ''});
          this.setState({row6col5: ''});
          this.rowNumber = 6;
          this.colNumber = 26;
          break;
        default:
          break;
      }

      // Special case for column 5 removal.
      switch(this.currentLocation) {
        case 'row1col5':
          this.setState({row1col1: ''});
          this.setState({row1col2: ''});
          this.setState({row1col3: ''});
          this.setState({row1col4: ''});
          this.setState({row1col5: ''});
          this.rowNumber = 1;
          this.colNumber = 1;
          break;
        case 'row2col5':
          this.canMoveNextRow = true;
          this.setState({row2col1: ''});
          this.setState({row2col2: ''});
          this.setState({row2col3: ''});
          this.setState({row2col4: ''});
          this.setState({row2col5: ''});
          this.rowNumber = 2;
          this.colNumber = 1;
          break;
        case 'row3col5':
          this.canMoveNextRow = true;
          this.setState({row3col1: ''});
          this.setState({row3col2: ''});
          this.setState({row3col3: ''});
          this.setState({row3col4: ''});
          this.setState({row3col5: ''});
          this.rowNumber = 3;
          this.colNumber = 1;
          break;
        case 'row4col5':
          this.canMoveNextRow = true;
          this.setState({row4col1: ''});
          this.setState({row4col2: ''});
          this.setState({row4col3: ''});
          this.setState({row4col4: ''});
          this.setState({row4col5: ''});
          this.rowNumber = 4;
          this.colNumber = 1;
          break;
        case 'row5col5':
          this.canMoveNextRow = true;
          this.setState({row5col1: ''});
          this.setState({row5col2: ''});
          this.setState({row5col3: ''});
          this.setState({row5col4: ''});
          this.setState({row5col5: ''});
          this.rowNumber = 5;
          this.colNumber = 1;
          break;
        case 'row6col5':
          this.canMoveNextRow = true;
          this.setState({row6col1: ''});
          this.setState({row6col2: ''});
          this.setState({row6col3: ''});
          this.setState({row6col4: ''});
          this.setState({row6col5: ''});
          this.rowNumber = 6;
          this.colNumber = 1;
          break;
        default:
          break;
      }

      this.nextLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
    }
  }

  // Event handler for letter keyboard button presses.
  handleTextChange = (letter) => {
    if(this.state.showWin == false) {
      this.cannotBackspace = false;
      this.setState({showAlert: false});

      switch('row' + this.rowNumber + 'col' + this.colNumber) {
        case 'row1col1':
          // Pick a word for the game if no word was already chosen.
          if(this.wordChosen == null) {
            this.handleWordListPopulate("./wordlist.txt");
          }
          this.setState({row1col1: letter});
          this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
          this.colNumber++;
          break;
        case 'row1col2':
          this.setState({row1col2: letter});
          this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
          this.colNumber++;
          break;
        case 'row1col3':
          this.setState({row1col3: letter});
          this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
          this.colNumber++;
          break;
        case 'row1col4':
          this.setState({row1col4: letter});
          this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
          this.colNumber++;
          break;
        case 'row1col5':
          this.setState({row1col5: letter});
          this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
          this.colNumber = 1;
          this.rowNumber++;
          break;
        default:
          this.setState({'': ''});
          break;
      }

      if(this.canMoveNextRow) {
        switch('row' + this.rowNumber + 'col' + this.colNumber) {
          case 'row2col1':
            this.setState({row2col1: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row2col2':
            this.setState({row2col2: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row2col3':
            this.setState({row2col3: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row2col4':
            this.setState({row2col4: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row2col5':
            this.canMoveNextRow = false;
            this.setState({row2col5: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber = 1;
            this.rowNumber++;
            break;
          default:
            this.setState({'': ''});
            break;
        }
      }

      if(this.canMoveNextRow) {
        switch('row' + this.rowNumber + 'col' + this.colNumber) {
          case 'row3col1':
            this.setState({row3col1: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row3col2':
            this.setState({row3col2: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row3col3':
            this.setState({row3col3: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row3col4':
            this.setState({row3col4: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row3col5':
            this.canMoveNextRow = false;
            this.setState({row3col5: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber = 1;
            this.rowNumber++;
            break;
          default:
            this.setState({'': ''});
            break;
        }
      }

      if(this.canMoveNextRow) {
        switch('row' + this.rowNumber + 'col' + this.colNumber) {
          case 'row4col1':
            this.setState({row4col1: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row4col2':
            this.setState({row4col2: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row4col3':
            this.setState({row4col3: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row4col4':
            this.setState({row4col4: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row4col5':
            this.canMoveNextRow = false;
            this.setState({row4col5: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber = 1;
            this.rowNumber++;
            break;
          default:
            this.setState({'': ''});
            break;
        }
      }

      if(this.canMoveNextRow) {
        switch('row' + this.rowNumber + 'col' + this.colNumber) {
          case 'row5col1':
            this.setState({row5col1: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row5col2':
            this.setState({row5col2: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row5col3':
            this.setState({row5col3: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row5col4':
            this.setState({row5col4: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row5col5':
            this.canMoveNextRow = false;
            this.setState({row5col5: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber = 1;
            this.rowNumber++;
            break;
          default:
            this.setState({'': ''});
            break;
        }
      }

      if(this.canMoveNextRow) {
        switch('row' + this.rowNumber + 'col' + this.colNumber) {
          case 'row6col1':
            this.setState({row6col1: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row6col2':
            this.setState({row6col2: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row6col3':
            this.setState({row6col3: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row6col4':
            this.setState({row6col4: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber++;
            break;
          case 'row6col5':
            this.canMoveNextRow = false;
            this.setState({row6col5: letter});
            this.currentLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
            this.colNumber = 1;
            this.rowNumber++;
            break;
          default:
              this.setState({'': ''});
              break;
        }
      }

      this.nextLocation = 'row' + this.rowNumber + 'col' + this.colNumber;
    }
  }

  render() {
    return (
        <div id="game-box" className="container">
          <div id="row" className="row">
              <div id="col" className="col">
                <div id='box1'><p id="entry">{this.state.row1col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box2"><p id="entry">{this.state.row1col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box3"><p id="entry">{this.state.row1col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box4"><p id="entry">{this.state.row1col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box5"><p id="entry">{this.state.row1col5}</p></div>
              </div>
          </div>
          <div id="row" className="row">
              <div id="col" className="col">
                <div id="box6"><p id="entry">{this.state.row2col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box7"><p id="entry">{this.state.row2col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box8"><p id="entry">{this.state.row2col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box9"><p id="entry">{this.state.row2col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box10"><p id="entry">{this.state.row2col5}</p></div>
              </div>
          </div>
          <div id="row" className="row">
              <div id="col" className="col">
                <div id="box11"><p id="entry">{this.state.row3col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box12"><p id="entry">{this.state.row3col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box13"><p id="entry">{this.state.row3col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box14"><p id="entry">{this.state.row3col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box15"><p id="entry">{this.state.row3col5}</p></div>
              </div>
          </div>
          <div id="row" className="row">
              <div id="col" className="col">
                <div id="box16"><p id="entry">{this.state.row4col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box17"><p id="entry">{this.state.row4col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box18"><p id="entry">{this.state.row4col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box19"><p id="entry">{this.state.row4col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box20"><p id="entry">{this.state.row4col5}</p></div>
              </div>
          </div>
          <div id="row" className="row">
              <div id="col" className="col">
                <div id="box21"><p id="entry">{this.state.row5col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box22"><p id="entry">{this.state.row5col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box23"><p id="entry">{this.state.row5col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box24"><p id="entry">{this.state.row5col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box25"><p id="entry">{this.state.row5col5}</p></div>
              </div>
          </div>
          <div id="row" className="row">
              <div id="col" className="col">
                <div id="box26"><p id="entry">{this.state.row6col1}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box27"><p id="entry">{this.state.row6col2}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box28"><p id="entry">{this.state.row6col3}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box29"><p id="entry">{this.state.row6col4}</p></div>
              </div>
              <div id="col" className="col">
                <div id="box30"><p id="entry">{this.state.row6col5}</p></div>
              </div>
          </div>
          <div id="key-row" className="row">
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('Q')} id="keyboard-button-q" type="button" className="btn btn-danger">Q</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('W')} id="keyboard-button-w" type="button" className="btn btn-danger">W</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('E')} id="keyboard-button-e" type="button" className="btn btn-danger">E</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('R')} id="keyboard-button-r" type="button" className="btn btn-danger">R</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('T')} id="keyboard-button-t" type="button" className="btn btn-danger">T</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('Y')} id="keyboard-button-y" type="button" className="btn btn-danger">Y</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('U')} id="keyboard-button-u" type="button" className="btn btn-danger">U</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('I')} id="keyboard-button-i" type="button" className="btn btn-danger">I</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('O')} id="keyboard-button-o" type="button" className="btn btn-danger">O</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('P')} id="keyboard-button-p" type="button" className="btn btn-danger">P</button>
            </div>
          </div>
          <div id="key-row" className="row">
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('A')} id="keyboard-button-a" type="button" className="btn btn-danger">A</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('S')} id="keyboard-button-s" type="button" className="btn btn-danger">S</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('D')} id="keyboard-button-d" type="button" className="btn btn-danger">D</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('F')} id="keyboard-button-f" type="button" className="btn btn-danger">F</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('G')} id="keyboard-button-g" type="button" className="btn btn-danger">G</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('H')} id="keyboard-button-h" type="button" className="btn btn-danger">H</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('J')} id="keyboard-button-j" type="button" className="btn btn-danger">J</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('K')} id="keyboard-button-k" type="button" className="btn btn-danger">K</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('L')} id="keyboard-button-l" type="button" className="btn btn-danger">L</button>
            </div>
          </div>
          <div id="key-row" className="row">
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('Z')} id="keyboard-button-z" type="button" className="btn btn-danger">Z</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('X')} id="keyboard-button-x" type="button" className="btn btn-danger">X</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('C')} id="keyboard-button-c" type="button" className="btn btn-danger">C</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('V')} id="keyboard-button-v" type="button" className="btn btn-danger">V</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('B')} id="keyboard-button-b" type="button" className="btn btn-danger">B</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('N')} id="keyboard-button-n" type="button" className="btn btn-danger">N</button>
            </div>
            <div id="key-col" className="col">
              <button onClick={() => this.handleTextChange('M')} id="keyboard-button-m" type="button" className="btn btn-danger">M</button>
            </div>
          </div>
          <div id="key-row" className="row">
            <div id="key-col-misc" className="col">
              <button onClick={() => this.handleEnter()} id="keyboard-button-misc-enter" type="button" className="btn btn-danger">ENTER</button>
            </div>
            <div id="key-col-misc" className="col">
              <button onClick={() => this.handleBackSpace()} id="keyboard-button-misc-backspace" type="button" className="btn btn-danger"><img id="backspace-image" src='./images/backspace.png'></img></button>
            </div>
          </div>
          <Alert id="alert-box" severity="error" style={{ visibility: this.state.showAlert ? 'visible' : 'hidden' }}>Not a word. Try Again.</Alert>
          <Alert id="win-box" severity="error" style={{ visibility: this.state.showWin ? 'visible' : 'hidden' }}>You got the word! Reload the page to play again.</Alert>
          <Alert id="alert-box" severity="error" style={{ visibility: this.state.showLoss ? 'visible' : 'hidden' }}>You didn't get the word. Reload the page to play again.</Alert>

        <div>
          <p id="body-game-desc-two">Created by Dylan Carty 2023</p>
        </div>
      </div>    
    )
  }
}
