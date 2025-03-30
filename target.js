// target
class Target {
  constructor(x, y, w, l, id) {
    this.x = x - 50;
    this.y = y - 60;
    this.width = w * 1.25;
    this.height = w / 1.25;
    this.label = l;
    this.id = id;
    this.click = false;
  }
  
clicked(mouse_x, mouse_y) {
    // Correct the hitbox check for a rectangle
    if (
        mouse_x > this.x && 
        mouse_x < this.x + this.width && 
        mouse_y > this.y && 
        mouse_y < this.y + this.height
    ) {
        this.click = true;
        return true;
    }
    return false;
}

mapLetterToColor(letter) {
    const letterColorMap = {
        'A': '#FF0000', // Red-Orange
        'B': '#FF33D7', // Lime Green
        'C': '#5E28D8', // Blue
        'D': '#DAD025', // Yellow
        'E': '#83C9F5', // Purple
        'F': '#22E683', // Orange
        'G': '#F73BEF', // Teal
        'H': '#82E436', // Dark Blue
        'I': '#F39C12', // Amber
        'J': '#A83AD6', // Dark Orange
        'K': '#DA2020', // Green
        'L': '#195EDE', // Grey
        'M': '#F39C12', // Purple
        'N': '#82E436', // Dark Gray
        'O': '#B430CF', // Red
        'P': '#22E683', // Teal
        'Q': '#83C9F5', // Magenta
        'R': '#1A99DA', // Pink
        'S': '#D82828', // Light Green
        'T': '#FF33D7', // Golden Yellow
        'U': '#FF0000', // Dark Orange
        'V': '#FF33D7', // Purple
        'W': '#5E28D8', // Teal
        'X': '#1A99DA', // Yellow
        'Y': '#83C9F5', // Golden Yellow
        'Z': '#22E683'  // Orange
    };
    
  return letterColorMap[letter] || '#FFFFFF'; // Return white if letter is not found
  }
    
  /*
  mapLetterToColor(letter) {
    const firstChar = letter.toUpperCase().charAt(0);
    const charCode = firstChar.charCodeAt(0);    
    const position = charCode - 65;
    const hue = 500 - (position * 15);
    const saturation = 70
    const lightness = 70;

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
*/
  
  reset() {
    this.click = false;
  }
  
  draw(head_letter, colorChange) {
    // Desenhar o círculo
    
    if(this.click === true) {
      fill('#65635F');
    }
    else {
      //fill('#03c');
      fill(this.mapLetterToColor(this.label.charAt(0)));
    }
    
    /*if (colorChange % 4 == 0) {
      fill('#CC3030');
    } else if (colorChange % 3 == 0) {
      fill('#0FF11F');
    } else if (colorChange % 2 == 0) {
      fill('#FFD700E8');
    } else {
      fill('#EE0FF1');
    }*/
    
  
    //circle(this.x, this.y, this.width);
    
    rect(this.x, this.y, this.width, this.height); // (x, y, width, height)

    // Separar as letras
    let firstLetter = this.label.charAt(0);
    let secondLetter = this.label.charAt(1); // Pode não existir
    let thirdLetter = this.label.charAt(2);
    let restOfWord = this.label.substring(2);
    
    // first part
    //let firstPart = this.label.substring(0,2);
    
    // Definir tamanhos de fonte
    let bigFont = 35;
    let mediumFont = 30;
    let smallFont = 20;
    
    
    // Medir larguras das letras
    textSize(bigFont);
    let firstLetterWidth = textWidth(firstLetter);
    textSize(mediumFont);
    let secondLetterWidth = textWidth(secondLetter);
    textSize(smallFont);
    let restOfWordWidth = textWidth(restOfWord);

    // Calcular posição inicial para centralizar tudo
    let textTotalWidth = firstLetterWidth + secondLetterWidth + restOfWordWidth;
    let startX = this.x + 5;

    textSize(bigFont);
    fill('rgb(255,255,255)');
    textStyle(BOLD);
    stroke(0);
    strokeWeight(3);
    
    
    if (last != firstLetter){
      fill(color(255,255,255));
      last = firstLetter;
      text(firstLetter, startX + 20, this.y + 30);
    }
    
    if (this.label.includes(" ")) {
      let labelParts = this.label.split(" ");
      strokeWeight(0);
      // Desenhar o restante da palavra (branco e menor)
      textSize(smallFont);
      fill('rgb(255,255,255)');
    text(labelParts[0], startX, this.y + 50);

    // Draw the second part at this.y + 90
    text(labelParts[1], startX, this.y + 70);
    } else {
          strokeWeight(0);
        // Desenhar o restante da palavra (branco e menor)
        textSize(smallFont);
        fill('rgb(255,255,255)');
        text(this.label, startX, this.y + 60);
    
    // Desenhar letra em cima do circulo
    //if (head_letter) {
    //  textSize(bigFont);
    //  fill(255,0,0);
    //  text(firstLetter, startX - 60, this.y);      
    //}
    }
    
  }
  
  getFirstLetter() {
    return this.label.charAt(0);
  }
  
}
