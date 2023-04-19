import React, { Fragment } from "react";
import {
  SortableContainer,
  SortableContainerProps,
  SortableElement,
  SortableElementProps,
} from "react-sortable-hoc";

interface ISortableItem extends SortableElementProps {
  children: React.ReactNode;
}

/**
 *@name SortableItem
 *@brief Component to render each list item
 *@param {props} props.children is each element of the list
 */

const SortableItem: React.ComponentClass<ISortableItem, any> = SortableElement(
  ({ children }: ISortableItem) => <Fragment>{children}</Fragment>
);

interface ISortableContainer extends SortableContainerProps {
  children: React.ReactElement[];
  ContainerToList: (props: {
    children: React.ReactNode[];
  }) => React.ReactElement;
}

//

/**
 *@name SortableContainerOwn
 *@brief Component to render list container
 *@param {props} props.children is each element of the list
 *@param {props} props.ContainerToList is container custom to list
 */

const SortableContainerOwn: React.ComponentClass<ISortableContainer, any> =
  SortableContainer(({ children, ContainerToList }: ISortableContainer) => {
    return ContainerToList({ children });
  });

/**
 *@name SortableList
 *@brief Component to render SortableList
 *@param {props} props.onSortEnd function that is fired just after dropping the item in the new place in the list
 *@param {props} props.ContainerToList is container custom to list
 *@param {props} props.children is each element of the list
 *@param {...config}  config the rest of the props for the Sortable Container component here are the props available https://www.npmjs.com/package/react-sortable-hoc

 */

const SortableList = ({
  onSortEnd,
  children,
  ContainerToList,
  ...config
}: ISortableContainer) => {
  return (
    <SortableContainerOwn
      {...{ onSortEnd, axis: "xy", ContainerToList, ...config }}
    >
      {children.map((item, index) => {
        return (
          <>
            <SortableItem key={`item-${item.key}`} index={index}>
              {item}
            </SortableItem>
          </>
        );
      })}
    </SortableContainerOwn>
  );
};

export default SortableList;
