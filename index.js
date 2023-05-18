const fs = require('fs');

fs.readdir('lbr-configs/', function (err, filenames) {
  if (err) {
    console.log(err);
    return;
  } else {
    filenames.forEach(function (filename) {
      if (!filename.startsWith('testing')) {
        fs.readFile(`lbr-configs/${filename}`, 'utf8', (error, data) => {
          if (error) {
            console.log(error);
            return;
          }
          else {
            const obj = JSON.parse(data);
          
            // Find the duplicate entires
            // const uniq = obj.facetSet
            //   .map((item) => {
            //     return {
            //       count: 1,
            //       name: item.field
            //     };
            //   })
            //   .reduce((result, b) => {
            //     result[b.name] = (result[b.name] || 0) + b.count;

            //     return result;
            //   }, {});
            // const duplicates = Object.keys(uniq).filter((a) => uniq[a] > 1);

            // console.log('\n', duplicates, filename, 'redundant');

            // For un-necessary active default filters
            // const unNecessaryActiveFilters = obj.facetSet
            //   .filter((item) => {
            //     if (item.active === true) {
            //       if (!(item.field === 'material.supplierLifecycleState' || item.field === 'material.supplierCode' || item.field === 'material.developer')) {
            //         return true
            //       }
            //     }
            //   })
            // console.log(unNecessaryActiveFilters, filename, 'un-necessary active filter');

            // For active default filters
            // const missingNecessaryActiveFilters = obj.facetSet
            //   .filter((item) => {
            //     if (item.active === false) {
            //       if ((item.field === 'material.supplierLifecycleState' || item.field === 'material.supplierCode' || item.field === 'material.developer')) {
            //         return true
            //       }
            //     }
            //   })
            // console.log(missingNecessaryActiveFilters, filename, 'missing active filter');

            // Check if the required column is not present 
            // const unNecessaryColumn = obj.columnSet
            //   .filter((item) => {
            //     if ((item.field === 'material.supplier.usePurposes.productDivision')) {
            //       return true
            //     }
            //   }).map(item => item.field);
            // console.log(unNecessaryColumn, filename, 'un-necessary column'); 
          }
        });
      }
    });
  }
});