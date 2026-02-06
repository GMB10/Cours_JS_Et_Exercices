
function estpremier(nombre,div=2){
                if (nombre>= div){
                    if(nombre%div==0){
                        return false;
                    }
                    return estpremier(nombre,div+1);
                }
                return true;
            }
