<template>
  <div class="pdf-component">
    <h1>请查看当前pdf</h1>
    <!-- <div style="border: 1px solid green">
      <canvas
        id="canvas-pdf-1"
        class="canvas-pdf"
        style="border: 1px solid red"
      ></canvas>
    </div> -->
    <div class="scroll-container">
      <div
        v-for="item in totals"
        :id="`page-${item}`"
        :key="item"
        class="pdf-box"
      >
        <canvas :id="'canvas-pdf-' + item" class="canvas-pdf"></canvas>
      </div>
    </div>

    <!-- <img src="../assets/logo.png" style="border: 3px solid red" /> -->
  </div>
</template>

<script>
import { TextLayerBuilder } from "pdfjs-dist/web/pdf_viewer";
import "pdfjs-dist/web/pdf_viewer.css";
const PDFJS = require("pdfjs-dist");
PDFJS.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.min");

export default {
  data() {
    return {
      pdfUrl: require("../assets/handler.pdf"),
      scale: 1,
      totals: []
    };
  },
  methods: {
    loadPdf() {
      PDFJS.getDocument(this.pdfUrl).then(pdf => {
        let totalPage = pdf.numPages;
        let idName = "canvas-pdf-";
        console.log("pdf=====", pdf, totalPage);
        this.createCanvas(totalPage, idName);

        for (let i = 1; i <= totalPage; i++) {
          pdf.getPage(i).then(page => {
            let pageDiv = document.getElementById(`page-${i}`);
            let viewport = page.getViewport(this.scale);
            let canvas = document.getElementById(idName + i);
            let context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            this.viewHeight = viewport.height;
            let renderContext = {
              canvasContext: context,
              viewport
            };
            // 如果你只是展示pdf而不需要复制pdf内容功能，则可以这样写render
            // page.render(renderContext) 如果你需要复制则像下面那样写利用text-layer
            page
              .render(renderContext)
              .then(() => {
                return page.getTextContent();
              })
              .then(textContent => {
                // 创建文本图层div
                const textLayerDiv = document.createElement("div");
                textLayerDiv.setAttribute("class", "textLayer");
                // 将文本图层div添加至每页pdf的div中
                pageDiv.appendChild(textLayerDiv);
                // 创建新的TextLayerBuilder实例
                let textLayer = new TextLayerBuilder({
                  textLayerDiv: textLayerDiv,
                  pageIndex: page.pageIndex,
                  viewport: viewport
                });
                textLayer.setTextContent(textContent);
                textLayer.render();
              });
          });
        }
      });
    },
    createCanvas(totalPages) {
      for (let i = 1; i <= totalPages; i++) {
        this.totals.push(i);
      }
    }
  },
  mounted() {
    this.loadPdf();
  }
};
</script>
<style scoped>
.pdf-component {
}
.scroll-container {
  border: 3px solid red;
  height: 600px;
  overflow: hidden;
  overflow-y: scroll;
}
.pdf-box {
  position: relative;
}

.el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
