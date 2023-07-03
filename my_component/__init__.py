import os
import streamlit.components.v1 as components

_RELEASE = False

if not _RELEASE:
    _component_func = components.declare_component(
        "my_component",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _component_func = components.declare_component("my_component", path=build_dir)


def my_component(data, key=None, show_node_ids=True):
    component_value = _component_func(
        data=data, key=key, default=0, show_node_ids=show_node_ids
    )

    return component_value


if not _RELEASE:
    import streamlit as st
    import json

    st.set_page_config(layout="wide")

    with open("tree_data.json") as f:
        data = json.load(f)

    # st.write(data)
    st.markdown("---")

    name = "Decision Tree"
    node_id = my_component(data, key="dct", show_node_ids=True)

    st.markdown("---")

    st.write(node_id)
