import React from "react";
export const columnConfigGenerator = (
  accessorObject,
  headerObject,
  onClickHandler
) => {
  const columnConfig = [
    {
      columns: [
        {
          Header: headerObject.movieIcon,
          accessor: accessorObject.icon,
          Cell: row => {
            return (
              <div>
                <img
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "20px"
                  }}
                  id={row.original.id}
                  src={row.original.icon}
                  alt="Icon"
                  onClick={onClickHandler}
                />
              </div>
            );
          },
          width: "33%",
          sortable: false
        },
        {
          Header: headerObject.name,
          accessor: accessorObject.name,
          width: "33%",
          sortable: false
        },
        {
          Header: headerObject.imdbRating,
          accessor: accessorObject.imdbRating,
          width: "33%",
          sortable: true
        }
      ]
    }
  ];
  return columnConfig;
};
