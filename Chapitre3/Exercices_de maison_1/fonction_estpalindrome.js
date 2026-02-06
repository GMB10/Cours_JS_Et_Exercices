function estpalindrome(entrer){

        let estpalindrome = true;
        n = entrer.length;

        for(let i=0; i < n/2; i++)
            {
                if ( entrer[i] != entrer[n - i - 1]) 
                {
                    estpalindrome=false;
                    break;
                } 
            }

        if(estpalindrome)
            {
            alert("Le mot est un palindrome");
            }
            else
                {
                    alert("Le mot n'est pas un palindrome");
                }
                }
       let entrer=prompt("Entrez le mot ou la phtrase");
       alert(estpalindrome(entrer));