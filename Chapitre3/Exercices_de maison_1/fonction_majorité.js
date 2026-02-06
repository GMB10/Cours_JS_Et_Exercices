 function estmajeur(n)
                    {
                        if(n<18)
                        {
                            return "Mineur";
                        }
                        else
                        {
                            return "Majeur"; 
                        }
            
                    } 
                    let n=prompt("Entrez l'âge");
                     alert(estmajeur(n));