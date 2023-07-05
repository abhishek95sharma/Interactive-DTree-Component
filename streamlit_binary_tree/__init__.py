import os
import streamlit.components.v1 as components

_RELEASE = True

if not _RELEASE:
    _component_func = components.declare_component(
        "streamlit_binary_tree",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component(
        "streamlit_binary_tree", path=build_dir
    )

from typing import List


def binary_tree(
    data: List[dict],
    key: str = None,
    expanded: bool = True,
    show_node_ids: bool = True,
    style: dict = None,
):
    """
    Creates an interactive foldable binary tree based on input data.

    Args:
        data (List[dict]): Data for tree in list format. List item format should be as follows-
            [{
                "node_id": int,
                "left": {
                    "id": int,
                    "condition": str
                },
                "right": {
                    "id": int,
                    "condition": str
                },
                "contents": List[str],
                "color": str
            }]
        key (str, optional): Name of tree. Defaults to None.
        expanded (bool, optional): Whether completely expanded at the start. Defaults to True.
        show_node_ids (bool, optional): Whether node ids are shown at the left of every single node. Defaults to True.
        style (_type_, optional): Styling info: font style, color, spacing. Defaults to default_style.

    Returns:
        int: Selected node id

    Example Usage:
        Tree with dummy data and default style.

        node_id = binary_tree(
            data=[
                {
                    "node_id": 0,
                    "left": {"id": 1, "condition": "Condition Left"},
                    "right": {"id": 2, "condition": "Condition Right"},
                    "contents": ["Line 1", "Line 2", "Line 3"],
                    "color": "#1f8430",
                },
                {
                    "node_id": 1,
                    "left": {"id": 1, "condition": "Condition Left"},
                    "right": {"id": 2, "condition": "Condition Right"},
                    "contents": ["Line 1", "Line 2", "Line 3"],
                    "color": "#1f8430",
                },
            ],
            key="Decision Tree",
            expanded=True,
            show_node_ids=True,
            default_style={
                "max_height": "2400px",
                "padding_quantum": "5px",
                "edge_size": "150px",
                "edge_color": "#c2c9cc",
                "edge_hover_color": "#adc2cc",
                "node_size": "100px",
                "node_border_color": "#c2c9cc",
                "node_color": "#fff",
                "node_hover_color": "#f0faff",
                "font_family": "arial",
                "font_size": "0.7em",
                "text_color": "#333",
                "text_hover_color": "#000",
                "button_color": "#70b4c2",
                "button_hover_color": "#2d6186",
                "transition_time": "0.7s",
            }
        )

    """

    default_style = {
        "max_height": "2400px",
        "padding_quantum": "5px",
        "edge_size": "150px",
        "edge_color": "#c2c9cc",
        "edge_hover_color": "#adc2cc",
        "node_size": "100px",
        "node_border_color": "#c2c9cc",
        "node_color": "#fff",
        "node_hover_color": "#f0faff",
        "font_family": "arial",
        "font_size": "0.7em",
        "text_color": "#333",
        "text_hover_color": "#000",
        "button_color": "#70b4c2",
        "button_hover_color": "#2d6186",
        "transition_time": "0.7s",
    }

    style = {} if (style is None) else style
    filtered_style = {k: v for k, v in style.items() if k in default_style.keys()}
    style = default_style.copy()
    for k in style.keys():
        if k in filtered_style:
            style[k] = filtered_style[k]

    component_value = _component_func(
        data=data,
        key=key,
        default=0,
        expanded=expanded,
        show_node_ids=show_node_ids,
        style=style,
    )

    return component_value


if not _RELEASE:
    import streamlit as st

    st.set_page_config(layout="wide")

    data = [
        {
            "node_id": 0,
            "left": {"id": 1, "condition": "Condition"},
            "right": {"id": 2, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {
            "node_id": 1,
            "left": {"id": 3, "condition": "Condition"},
            "right": {"id": 4, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {
            "node_id": 2,
            "left": {"id": 5, "condition": "Condition"},
            "right": {"id": 6, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {"node_id": 3, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {"node_id": 5, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {
            "node_id": 6,
            "left": {"id": 7, "condition": "Condition"},
            "right": {"id": 8, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {
            "node_id": 4,
            "left": {"id": 9, "condition": "Condition"},
            "right": {"id": 10, "condition": "Condition"},
            "contents": ["Line 1"],
            "color": "#1f8430",
        },
        {"node_id": 7, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {"node_id": 8, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {"node_id": 9, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {
            "node_id": 10,
            "left": {"id": 11, "condition": "Condition"},
            "right": {"id": 12, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {
            "node_id": 11,
            "left": {"id": 13, "condition": "Condition"},
            "right": {"id": 14, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {"node_id": 12, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {"node_id": 13, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {
            "node_id": 14,
            "left": {"id": 15, "condition": "Condition"},
            "right": {"id": 16, "condition": "Condition"},
            "contents": ["Line 1", "Line 2", "Line 3"],
            "color": "#1f8430",
        },
        {"node_id": 15, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
        {"node_id": 16, "contents": ["Line 1", "Line 2", "Line 3"], "color": "#1f8430"},
    ]

    left, right = st.columns(2)
    # st.write(data)

    st.markdown("---")
    node_id = binary_tree(data, key="dct", show_node_ids=True)
    st.write(node_id)
    st.markdown("---")
