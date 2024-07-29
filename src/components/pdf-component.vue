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
    <div class="div-container">
      <div class="left-part">
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
      </div>
      <div class="right-part">
        <!-- src属性指向自定义页面查看器 -->
        <iframe
          id="pdfViewer"
          src="/static/default/default.html"
          width="100%"
          height="100%"
        ></iframe>

        <!-- src属性指向PDF.js的查看器页面  -->
        <!-- <iframe
          src="https://mozilla.github.io/pdf.js/web/viewer.html"
          width="100%"
          height="600px"
          style="border: none;"
        >
        </iframe> -->
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
window.PDFJS = PDFJS;
console.log("dfsdfsdf===cvcx", window.PDFJS);
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
        // console.log('pdf=====', pdf, totalPage)
        this.createCanvas(totalPage, idName);

        for (let i = 1; i <= totalPage; i++) {
          pdf.getPage(i).then(page => {
            let pageDiv = document.getElementById(`page-${i}`);
            let viewport = page.getViewport(this.scale);
            console.log("viewport======", viewport);
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
    },

    loadPdfIframe() {
      // 获取iframe元素
      var iframe = document.getElementById("pdfViewer");
      // console.log("iframe=====", iframe);
      if (iframe) {
        // 确保iframe内容加载完成
        iframe.onload = function() {
          // console.log('dfsdf====', iframe.contentWindow)
          // 在iframe中渲染PDF
          iframe.contentWindow.postMessage(
            {
              action: "load",
              url: this.pdfUrl
            },
            "*"
          );
        };
      }
    },

    getPdfUrl() {
      const urlPath = fillPublicPath("/static/pdf.html");
      const urlCode = encodeURIComponent(this.url);
      this.pdfUrl = `${urlPath}?file=${urlCode}&source=detail`;
    }
  },
  mounted() {
    // this.loadPdf();
    // this.loadPdfIframe();
  }
};
</script>
<style scoped>
.pdf-component {
}

.div-container {
  width: 100%;
  display: flex;
}
.left-part {
  border: 1px solid green;
  width: 50%;
}
.right-part {
  border: 1px solid rgb(207, 214, 8);
  width: 50%;
}

.scroll-container {
  /* border: 3px solid red; */
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
