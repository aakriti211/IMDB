import React from "react";

export const WatchlistColumnConfig = (accessorObject, headerObject) => {
  const columnConfig = [
    {
      columns: [
        {
          Header: headerObject.icon,
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
                  src={row.original.icon}
                  alt="Icon"
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
          sortable: false,
          filterable: true
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
