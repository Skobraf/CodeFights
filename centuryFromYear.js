function centuryFromYear(year) {
      var output;
      if(year<99){
            return 1;
      }else{
            output =Math.ceil(year/100);
            return output;
      }
}