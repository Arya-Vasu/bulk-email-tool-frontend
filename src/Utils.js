// Change the Archived value

export const changeIsArchivedValue = (id, value, arr) => {
    for (var i in arr) {
      if (arr[i].id === id) {
        arr[i].isArchived = value;
      }
    }
    return arr;
  };


// Change the Deleted value

export const changeIsDeletedValue = (id, value, arr) => {
    for (var i in arr) {
      if (arr[i].id === id) {
        arr[i].isDeleted = value;
      }
    }
    return arr;
  };


  // Change the Draft value
  
  export const changeIsDraftValue = (id, value, arr) => {
      for (var i in arr) {
        if (arr[i].id === id) {
          arr[i].isDraft = value;
        }
      }
      return arr;
    };


    // Change the Read value
    
    export const changeMarkReadValue = (id, value, arr) => {
        for (var i in arr) {
          if (arr[i].id === id) {
            arr[i].markRead = value;
          }
        }
        return arr;
      };


      // Change the Starred value
      
      export const changeIsStarredValue = (id, value, arr) => {
          for (var i in arr) {
            if (arr[i].id === id) {
              arr[i].isStarred = value;
            }
          }
          return arr;
        };


        // Change the Selected value
        
        export const changeIsSelectedValue = (id, value, arr) => {
            for (var i in arr) {
              if (arr[i].id === id) {
                arr[i].isSelected = value;
              }
            }
            return arr;
          };