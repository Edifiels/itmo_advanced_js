function badCodeExample() {
  const name = 'John';
  const age = 25;
  const isActive = true;
  

  const unusedVariable = 'This will trigger ESLint warning';
  
  if(age == '25') {
    console.log('Age is 25');
  }
  
  if(isActive)
  {console.log('User is active');}
  
  return name;
}
