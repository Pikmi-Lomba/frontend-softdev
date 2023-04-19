import Safe from "react-safe";

const Disqus = () => {
  return (
    <section className="disqusComment">
      <div id="disqus_thread"></div>
      <Safe.script>
        {(function () {
          // DON'T EDIT BELOW THIS LINE
          var d = document,
            s = d.createElement("script");
          s.src = "https://viewstravel-id.disqus.com/embed.js";
          s.setAttribute("data-timestamp", +new Date());
          (d.head || d.body).appendChild(s);
        })()}
      </Safe.script>
    </section>
  );
};

export default Disqus;
