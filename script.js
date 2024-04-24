    document.getElementById("myForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Zapobiegamy domyślnej akcji przesłania formularza

        let inputValue = Number(document.getElementById('myInput').value);
        
        console.log(inputValue);

        let powerOfTwo = [];
        
        powerOfTwo.length = inputValue + 1;
        
        for (let i=0; i<powerOfTwo.length; i++) {
          powerOfTwo[i] = 2 ** i;
        }
        
        console.log(powerOfTwo);

        const updatedDiv = document.getElementById("result");
        
        updatedDiv.textContent = `[` + String(powerOfTwo) + `]`;

        return powerOfTwo;

    });

