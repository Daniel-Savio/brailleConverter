function toBraille(text) {
    text = text.replaceAll("a", ".");
    text=text.replaceAll("b","⠃");
    text=text.replaceAll("c","⠉");
    text=text.replaceAll("d","⠙");
    text=text.replaceAll("e","⠑");
    text=text.replaceAll("f","⠋");
    text=text.replaceAll("g","⠛");
    text=text.replaceAll("h","⠓");
    text=text.replaceAll("i","⠊");
    text=text.replaceAll("j","⠚");
    text=text.replaceAll("k","⠅");
    text=text.replaceAll("l","⠇");
    text=text.replaceAll("m","⠍");
    text=text.replaceAll("n","⠝");
    text=text.replaceAll("o","⠕");
    text=text.replaceAll("p","⠏");
    text=text.replaceAll("q","⠟");
    text=text.replaceAll("r","⠗");
    text=text.replaceAll("s","⠎");
    text=text.replaceAll("t","⠞");
    text=text.replaceAll("u","⠥");
    text=text.replaceAll("v","⠧");
    text=text.replaceAll("w","⠺");
    text=text.replaceAll("x","⠭");
    text=text.replaceAll("y","⠽");
    text=text.replaceAll("z","⠵");
    
    text=text.replaceAll("ç","⠯");
    text=text.replaceAll("Ç","⠠⠯");
    
    text=text.replaceAll("A","⠠⠁");
    text=text.replaceAll("B","⠠⠃");
    text=text.replaceAll("C","⠠⠉");
    text=text.replaceAll("D","⠠⠙");
    text=text.replaceAll("E","⠠⠑");
    text=text.replaceAll("F","⠠⠋");
    text=text.replaceAll("G","⠠⠛");
    text=text.replaceAll("H","⠠⠓");
    text=text.replaceAll("I","⠠⠊");
    text=text.replaceAll("J","⠠⠚");
    text=text.replaceAll("K","⠠⠅");
    text=text.replaceAll("L","⠠⠇");
    text=text.replaceAll("M","⠠⠍");
    text=text.replaceAll("N","⠠⠝");
    text=text.replaceAll("O","⠠⠕");
    text=text.replaceAll("P","⠠⠏");
    text=text.replaceAll("Q","⠠⠟");
    text=text.replaceAll("R","⠠⠗");
    text=text.replaceAll("S","⠠⠎");
    text=text.replaceAll("T","⠠⠞");
    text=text.replaceAll("U","⠠⠥");
    text=text.replaceAll("V","⠠⠧");
    text=text.replaceAll("W","⠠⠺");
    text=text.replaceAll("X","⠠⠭");
    text=text.replaceAll("Y","⠠⠽");
    text=text.replaceAll("Z","⠠⠵");
    
    text=text.replaceAll("ou","⠳");
    text=text.replaceAll("er","⠻");
    
    /*Números*/
    text=text.replaceAll("0","⠴");
    text=text.replaceAll("1","⠂");
    text=text.replaceAll("2","⠆");
    text=text.replaceAll("3","⠒");
    text=text.replaceAll("4","⠲");
    text=text.replaceAll("5","⠢");
    text=text.replaceAll("6","⠖");
    text=text.replaceAll("7","⠶");
    text=text.replaceAll("8","⠦");
    text=text.replaceAll("9","⠔");
    
    text=text.replaceAll(" 0","⠼⠴");
    text=text.replaceAll(" 1","⠼⠂");
    text=text.replaceAll(" 2","⠼⠆");
    text=text.replaceAll(" 3","⠼⠒");
    text=text.replaceAll(" 4","⠼⠲");
    text=text.replaceAll(" 5","⠼⠢");
    text=text.replaceAll(" 6","⠼⠖");
    text=text.replaceAll(" 7","⠼⠶");
    text=text.replaceAll(" 8","⠼⠦");
    text=text.replaceAll(" 9","⠼⠔");
    
    text=text.replaceAll(" ","⠀");
    
    /*Acento Agudo*/
    text=text.replaceAll("á","⠷");
    text=text.replaceAll("é","⠿");
    text=text.replaceAll("í","⡈");
    text=text.replaceAll("ó","⠬");
    text=text.replaceAll("ú","⠾");
    
    text=text.replaceAll("Á","⠠⠷");
    text=text.replaceAll("Ã","⠜");
    text=text.replaceAll("É","⠠⠿");
    text=text.replaceAll("Í","⠠⡈");
    text=text.replaceAll("Ó","⠠⠬");
    text=text.replaceAll("Ú","⠠⠾");
    
    /*Acento Circunflexo*/
    text=text.replaceAll("â","⠡");
    text=text.replaceAll("ê","⠣");
    text=text.replaceAll("ô","⠹");
    
    text=text.replaceAll("Â","⠠⠡");
    text=text.replaceAll("Ê","⠠⠣");
    text=text.replaceAll("Ô","⠠⠹");
    
    /*Acento Til*/
    text=text.replaceAll("ã","⠜");
    text=text.replaceAll("õ","⠪");
    
    
    /*Crase*/
    text=text.replaceAll("à","⠫");
    text=text.replaceAll("À","⠠⠫");
    
    /*Trema*/
    text=text.replaceAll("ü","⠫");
    text=text.replaceAll("Ü","⠠⠫");
    
    /*Pontuação*/
    text=text.replaceAll(",","⠂");
    text=text.replaceAll(".","⠄");
    text=text.replaceAll("'","⠄");
    text=text.replaceAll("...","⠄⠄⠄");
    text=text.replaceAll(";","⠆");
    text=text.replaceAll(":","⠒");
    text=text.replaceAll("!","⠖");
    text=text.replaceAll("?","⠢");
    text=text.replaceAll("-","⠤");
    text=text.replaceAll("—","⠤⠤");
    text=text.replaceAll('"',"⠦");
    text=text.replaceAll("*","⠔");
    text=text.replaceAll("$","⠰");
    text=text.replaceAll("€","⠈⠑");
    return text;
}
