import{_ as i,c as e,o as s,d as l}from"./app-BAtxt-sN.js";const a="/assets/1907e1b4fafd229c776073b5c244caf9-qtwYMx9z.png",n="/assets/6d067f5225fd716974cec4579d04e2b6-BGbKaNdj.png",t="/assets/3c68f3c4e0520d665d66c63447e3fa85-7iluZExX.png",r={},h=l('<h2 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池"><span>线程池</span></a></h2><ul><li><p>线程池在系统启动时即创建大量空闲的线程，程序将一个 Runnable 对象或 Callable 对象传给线程池，线程池就会启动一个线程来执行它们的 <code>run()</code> 或 <code>call()</code> 方法</p></li><li><p>当 <code>run()</code> 或 <code>call()</code> 方法执行结束后，该线程并不会死亡，而是再次返回线程池中成为空闲状态，等待执行下一个 Runnable 对象或 Callable 对象的 <code>run()</code> 或 <code>call()</code> 方法</p></li><li><p>线程池的组成部分</p><ul><li>线程管理池（ThreadPool）：用于创建并管理线程池，包括创建，销毁，添加新任务</li><li>工作线程（PoolWorker）：线程池中的线程在没有任务的时候处于等待状态，可以循环的执行任务</li><li>任务接口（Task）：每个任务必须实现接口，用来提供工作线程调度任务的执行，规定了任务的入口以及执行结束的收尾工作和任务的执行状态等</li><li>任务队列（TaskQueue）：用于存放没有处理的任务，提供一种缓存机制</li></ul></li><li><p>线程池的使用：1. 创建线程池；2. 向线程池提交任务；3. <strong>关闭线程池</strong></p></li><li><p>如何确定合适数量的线程？对于计算型任务，cpu 数量的 1~2 倍；对于 IO 型任务，则需多一些线程，要根据具体的 IO 阻塞时长进行考量决定</p></li><li><p>线程池大小与处理器的利用率之比可以使用下面的公式进行估算： <a href="https://sdky.gitee.io/img/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%A7%E5%B0%8F%E4%B8%8E%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E5%88%A9%E7%94%A8%E7%8E%87%E4%B9%8B%E6%AF%94%E7%9A%84%E8%AE%A1%E7%AE%97%E5%85%AC%E5%BC%8F.png" target="_blank" rel="noopener noreferrer"><img src="'+a+'" alt="线程池大小与处理器的利用率之比的计算公式"></a></p></li><li><p><a href="https://sdky.gitee.io/img/%E7%BA%BF%E7%A8%8B%E6%B1%A0%E7%9B%B8%E5%85%B3%E7%B1%BB.png" target="_blank" rel="noopener noreferrer"><img src="'+n+`" alt="线程池相关类"></a> 图 1 线程池相关类</p></li></ul><h3 id="executors-工具类" tabindex="-1"><a class="header-anchor" href="#executors-工具类"><span>Executors 工具类</span></a></h3><ul><li>创建线程池的静态方法 <ul><li><code>ExecutorService newCachedThreadPool()</code>：创建一个具有缓存功能的线程池，系统根据需要创建线程，这些线程将会被缓存在线程池中（<strong>无界线程池</strong>，已有 60 秒钟未被使用的线程会被终止并从缓存中移除）<code>new ThreadPoolExecutor(0, Integer.MAX_VALUE, 60L, TimeUnit.SECONDS, new SynchronousQueue&lt;Runnable&gt;())</code></li><li><code>ExecutorService newFixedThreadPool(int nThreads)</code>：创建一个可重用的、<strong>具有固定核心线程数的线程池</strong><code>new ThreadPoolExecutor(nThreads, nThreads, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue&lt;Runnable&gt;())</code></li><li><code>ExecutorService newSingleThreadExecutor()</code>：创建一个<strong>只有单线程的线程池</strong><code>new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingQueue&lt;Runnable&gt;())</code></li><li><code>ScheduledExecutorService newScheduledThreadPool(int corePoolSize)</code>：创建一个线程池，可在指定延迟后执行或定期执行线程任务<code>new ThreadPoolExecutor(corePoolSize, Integer.MAX_VALUE, 0, NANOSECONDS, new DelayedWorkQueue())</code></li></ul></li></ul><blockquote><p>SynchronousQueue 不储存元素的阻塞队列；LinkedBlockingQueue 的默认容量为 Integer.MAX_VALUE</p></blockquote><h3 id="executorservice-接口" tabindex="-1"><a class="header-anchor" href="#executorservice-接口"><span>ExecutorService 接口</span></a></h3><ul><li>Executor 的子接口，代表尽快执行线程的线程池（只要线程池中有空闲线程，就立即执行线程任务），方法 <ul><li><code>void execute(Runnable command)</code>：在未来某个时间执行给定的命令</li><li><code>Future&lt;?&gt; submit(Runnable task)</code>：将一个 Runnable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Runnable 对象代表的任务，其中 Future 对象代表 Runnable 任务的返回值——但 run () 方法没有返回值，所以 Future 对象将在 <code>run()</code> 方法执行结束后返回 null，但可以调用 Future 的 <code>isDone()</code>、<code>isCancelled()</code> 方法来获得 Runnable 对象的执行状态</li><li><code>&lt;T&gt; Future&lt;T&gt; submit(Runnable task, T result)</code>：将一个 Runnable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Runnable 对象代表的任务，其中 result 显式指定线程执行结束后的返回值，所以 Future 对象将在 <code>run()</code> 方法执行结束后返回 result</li><li><code>Future&lt;T&gt; submit(Callable&lt;T&gt; task)</code>：将一个 Callable 对象提交给指定的线程池，线程池将在有空闲线程时执行 Callable 对象代表的任务，其中 Future 代表 Callable 对象里 <code>call()</code> 方法的返回值</li><li><code>List&lt;Future&lt;T&gt;&gt; invokeAll(Collection&lt;? extends Callable&lt;T&gt;&gt; tasks)</code>：执行给定的任务，当所有任务完成时，返回保持任务状态和结果的 Future 列表</li><li><code>T invokeAny(Collection&lt;? extends Callable&lt;T&gt;&gt; tasks)</code>：执行给定的任务，如果某个任务已成功完成（也就是未抛出异常），则返回其结果</li><li><code>void shutdown()</code>：启动线程池的关闭序列，调用该方法后的线程池不再接收新任务，但会将以前所有已提交任务执行完成，当线程池中的所有任务都执行完成后，池中的所有线程都会死亡</li><li><code>List&lt;Runnable&gt; shutdownNow()</code>：试图停止所有正在执行的活动任务，暂停处理正在等待的任务，并返回等待执行的任务列表</li></ul></li></ul><h3 id="scheduledexecutorservice-接口" tabindex="-1"><a class="header-anchor" href="#scheduledexecutorservice-接口"><span>ScheduledExecutorService 接口</span></a></h3><ul><li>ExecutorService 的子接口，代表可在指定延迟后或周期性地执行线程任务的线程池，方法 <ul><li><code>ScheduledFuture&lt;V&gt; schedule(Callable&lt;V&gt; callable, long delay, TimeUnit unit)</code>：指定 callable 任务将在 delay 延迟后执行</li><li><code>ScheduledFuture&lt;?&gt; schedule(Runnable command, long delay, TimeUnit unit)</code>：指定 command 任务将在 delay 延迟后执行</li><li><code>ScheduledFuture&lt;?&gt; scheduleAtFixedRate(Runnable command, long initialDelay, long period, TimeUnit unit)</code>：指定 command 任务将在 delay 延迟后执行，而且以设定频率重复执行（在 initialDelay 后开始执行，依次在 initialDelay+period、initialDelay+2*period… 处重复执行）</li><li><code>ScheduledFuture&lt;?&gt; scheduleWithFixedDelay(Runnable command, long initialDelay, long delay, TimeUnit unit)</code>：创建并执行一个在给定初始延迟后首次启用的定期操作，随后在每一次执行终止和下一次执行开始之间都存在给定的延迟（如果任务在任一次执行时遇到异常，就会取消后续执行；否则，只能通过程序来显式取消或终止该任务）</li></ul></li></ul><h3 id="threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor"><span>ThreadPoolExecutor</span></a></h3><ul><li>线程池的实现类</li><li>构造器ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue workQueue)ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue workQueue, ThreadFactory threadFactory)ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue workQueue, RejectedExecutionHandler handler)ThreadPoolExecutor(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit, BlockingQueue workQueue, ThreadFactory threadFactory, RejectedExecutionHandler handler)</li><li>构造器中几个参数的含义： <ul><li>corePoolSize（线程池基本大小）：当提交一个任务到线程池时，线程池会创建一个线程来执行任务，即使其他空闲的基本线程能够执行新任务也会创建线程，等到需要执行的任务数大于线程池基本大小时就不再创建（如果调用了线程池的 prestartAllCoreThreads 方法，线程池会提前创建并启动所有基本线程）</li><li>maximumPoolSize（线程池最大线程数）：线程池允许创建的最大线程数，如果<strong>队列满了</strong>，并且已创建的线程数小于最大线程数，则线程池会再创建新的线程执行任务</li><li>keepAliveTime（线程保持活动的时间）：当线程数大于 corePoolSize 时，线程空闲之后保持存活的时间</li><li>TimeUnit（线程保持活动时间的单位）：可以使用 TimeUnit 时间单位来设置</li><li>BlockingQueue（任务队列）：用于保存等待执行的任务的阻塞队列，可以选择以下几个： <ul><li>ArrayBlockingQueue：基于数组的阻塞队列，按照 FIFO 原则进行排序</li><li>LinkedBlockingQueue：基于链表的阻塞队列，按照 FIFO 原则对元素进行排序。吞吐量通常要高于 ArrayBlockingQueue，Executors.newFixedThreadPool()、Executors.newSingleThreadExecutor() 使用了这个队列</li><li>SynchronousQueue：一个<strong>不储存元素</strong>的阻塞队列，每一个插入操作必须等到另外一个线程调用移除操作，否则插入操作一直处于阻塞状态。吞吐量通常要高于 LinkedBlockingQueue，Executors.newCachedThreadPool() 使用了这个队列</li><li>PriorityBlockingQueue：一个具有优先级的无限阻塞队列</li></ul></li><li>ThreadFactory（线程工厂）：用于设置创建线程的工厂</li><li>RejectedExecutionHandler（饱和策略）：这个本身是 Java 的一个接口，当队列和线程池都满了，需要一种策略处理新的任务，在这个类的最下部提供了四种内置的实现类： <ul><li>AbortPolicy：直接抛出异常（默认策略）</li><li>CallerRunsPolicy：只用调用者所在的线程来运行任务</li><li>DiscardOldestPolicy：丢弃队列里最近的一个任务，并执行当前的任务</li><li>DiscardPolicy：不处理，直接丢弃</li><li>自定义策略：实现 RejectedExecutionHandler 接口，自定义策略（如记录日志或持久化不能处理的任务）</li></ul></li></ul></li><li>提交一个新任务到线程池时，线程池的处理流程如下： <ul><li>判断当前线程池的线程数是否小于设置的线程池基本大小，小于，则创建新线程来执行任务，否则</li><li>判断任务队列是否满了，没满，则将新提交的任务放到任务队列中，否则</li><li>判断当前线程池的线程数是否小于设置的线程池最大线程数，小于，则创建新线程来执行任务，否则</li><li>交给饱和策略来处理新任务</li></ul></li></ul><h3 id="scheduledthreadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#scheduledthreadpoolexecutor"><span>ScheduledThreadPoolExecutor</span></a></h3><ul><li>ThreadPoolExecutor 的子类</li><li>构造器ScheduledThreadPoolExecutor(int corePoolSize)ScheduledThreadPoolExecutor(int corePoolSize, ThreadFactory threadFactory)ScheduledThreadPoolExecutor(int corePoolSize, RejectedExecutionHandler handler)ScheduledThreadPoolExecutor(int corePoolSize, ThreadFactory threadFactory, RejectedExecutionHandler handler)</li></ul><h3 id="通过-threadpoolexecutor-的方式创建线程池" tabindex="-1"><a class="header-anchor" href="#通过-threadpoolexecutor-的方式创建线程池"><span>通过 ThreadPoolExecutor 的方式创建线程池</span></a></h3><ul><li>方式 1：使用 com.google.guava 包</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// com.google.common.util.concurrent.ThreadFactoryBuilder</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 设置线程名字</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ThreadFactory</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> namedThreadFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ThreadFactoryBuilder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setNameFormat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">demo-pool-%d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 创建线程池</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ExecutorService</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ThreadPoolExecutor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0L</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> TimeUnit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">MILLISECONDS</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> LinkedBlockingQueue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Runnable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1024</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">),</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> namedThreadFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ThreadPoolExecutor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">AbortPolicy</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 向线程池提交任务</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">execute</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()-&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> System</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">out</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">println</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">currentThread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()));</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">String</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> future</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">submit</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -&gt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> Thread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">currentThread</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">getName</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 关闭线程池</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">shutdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // gracefully shutdown</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方式 2：使用 commons-lang3 包</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// org.apache.commons.lang3.concurrent.BasicThreadFactory</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">ScheduledExecutorService</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> executorService</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ScheduledThreadPoolExecutor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> BasicThreadFactory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">Builder</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">().</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">namingPattern</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">schedule-pool-%d</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">daemon</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">).</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">build</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">());</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>方式 3：使用 Spring 提供的 ThreadPoolTaskExecutor 和 ThreadPoolTaskScheduler</li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">@</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">Bean</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ThreadPoolTaskExecutor </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">taskExecutor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    ThreadPoolTaskExecutor</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ThreadPoolTaskExecutor</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setCorePoolSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 默认为 1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setMaxPoolSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">50</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 默认为 Integer.MAX_VALUE</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setQueueCapacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1000</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setThreadNamePrefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">taskExecutor-</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">    // 当线程池关闭时等待当前被调度的任务完成</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">    pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">setWaitForTasksToCompleteOnShutdown</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 默认为 false</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> pool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="juc" tabindex="-1"><a class="header-anchor" href="#juc"><span>JUC</span></a></h2><h3 id="原子类" tabindex="-1"><a class="header-anchor" href="#原子类"><span>原子类</span></a></h3><ul><li>java.util.concurrent.atomic</li><li>AtomicBoolean、AtomicInteger、AtomicLong 和 AtomicReference 的实例各自提供对相应类型单个变量的访问和更新</li><li>LongAdder、DoubleAdder、LongAccumulator、DoubleAccumulator</li></ul><h4 id="cas-机制" tabindex="-1"><a class="header-anchor" href="#cas-机制"><span>CAS 机制</span></a></h4><ul><li>CAS（Compare and Swap），即<strong>比较并替换</strong>，是一种实现并发算法时常用到的技术，Java 并发包中的很多类都使用了 CAS 技术</li><li>CAS 使用了 3 个基本操作数：内存地址 V，旧的预期值 A，要修改的新值 B</li><li>CAS 指令执行时，当且仅当内存地址 V 中的实际值与预期值 A 相等时，将内存地址 V 的值修改为 B，否则就什么都不做</li><li>整个比较并替换的操作是一个原子操作（利用 Unsafe 提供的原子性操作方法）</li><li>CAS 的缺点： <ul><li>循环时间长开销很大</li><li>只能保证一个共享变量的原子操作</li><li>ABA 问题： 解决方法：通过<strong>控制变量值的版本</strong>来保证 CAS 的正确性，如 AtomicStampedReference</li></ul></li></ul><h3 id="并发容器类" tabindex="-1"><a class="header-anchor" href="#并发容器类"><span>并发容器类</span></a></h3><ul><li>ConcurrentHashMap 通常优于同步的 HashMap</li><li>ConcurrentSkipListMap 通常优于同步的 TreeMap</li><li>当列表读多写少时，CopyOnWriteArrayList 优于同步的 ArrayList</li><li>ArrayBlockingQueue、SynchronousQueue</li></ul><h4 id="concurrenthashmap-原理" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-原理"><span>ConCurrentHashMap 原理</span></a></h4><ul><li>jdk1.7 使用分段锁技术，将数据分成一段一段的存储，然后给每一段数据配一把锁（Segment 继承了 ReentrantLock），当一个线程占用锁访问其中一个段数据的时候，其他段的数据也能被其他线程访问，能够实现真正的并发访问 <ul><li>共享变量都使用了 volatile 修饰</li><li>get 方法不需要加锁，除非读到的 value 是 null 时才会加锁重读</li><li>put 方法首先定位到 Segment，然后在 Segment 里进行插入操作</li></ul></li><li>jdk1.8 以后采用了 CAS + synchronized 来保证并发安全性</li><li>不允许 null 作为 key 或 value</li></ul><h4 id="copyonwritearraylist-原理" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-原理"><span>CopyOnWriteArrayList 原理</span></a></h4><ul><li>数组 array 都使用了 volatile 修饰</li><li>当向容器添加、删除或修改元素的时候，先将当前容器进行 Copy，复制出一个新的容器，然后在新的容器里添加删除或修改元素，添加、删除或修改完元素之后，再<strong>将原容器的引用指向新的容器</strong>，整个过程加锁，保证了写的线程安全</li><li>读操作不需要获得锁</li></ul><h4 id="blockingqueue-阻塞队列" tabindex="-1"><a class="header-anchor" href="#blockingqueue-阻塞队列"><span>BlockingQueue 阻塞队列</span></a></h4><ul><li><p>支持两个附加操作的 Queue：获取元素时等待队列变为非空，存储元素时等待队列变得可用</p></li><li><p>已知实现类：ArrayBlockingQueue, DelayQueue, LinkedBlockingDeque, LinkedBlockingQueue, PriorityBlockingQueue, SynchronousQueue</p></li><li><p>对于不能立即满足但可能在将来某一时刻可以满足的操作，BlockingQueue 的方法的处理方式有四种：1. 抛出异常；2. 返回特殊值（null 或 false，具体取决于操作）；3. 在操作可以成功前，无限期地阻塞当前线程；4. 在放弃前只在给定的最大时间限制内阻塞</p><p><a href="https://sdky.gitee.io/img/BlockingQueue%E6%96%B9%E6%B3%95.png" target="_blank" rel="noopener noreferrer"><img src="`+t+'" alt="BlockingQueue方法"></a> 图 2 BlockingQueue方法</p></li></ul><h4 id="安全失败-fail-safe" tabindex="-1"><a class="header-anchor" href="#安全失败-fail-safe"><span>安全失败（fail-safe）</span></a></h4><ul><li>采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，<strong>在拷贝的集合上进行遍历</strong></li><li>java.util.concurrent 包下的容器都是安全失败，可以在多线程下并发使用，并发修改</li></ul><h3 id="countdownlatch-计数器" tabindex="-1"><a class="header-anchor" href="#countdownlatch-计数器"><span>CountDownLatch 计数器</span></a></h3><ul><li>一个同步辅助类，在完成<strong>一组</strong>正在其它线程中执行的操作之前，让一个或多个线程一直等待</li><li>构造器 CountDownLatch(int count)：构造一个用给定计数初始化的 CountDownLatch</li><li>实例方法 <ul><li><code>void await()</code>：使当前线程在锁存器倒计数至零之前一直等待，除非线程被中断</li><li><code>boolean await(long timeout, TimeUnit unit)</code></li><li><code>void countDown()</code>：递减锁存器的计数，如果计数到达零，则释放所有等待的线程</li><li><code>long getCount()</code>：返回当前计数</li></ul></li></ul><h3 id="cyclicbarrier-栅栏" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-栅栏"><span>CyclicBarrier 栅栏</span></a></h3><ul><li>一个同步辅助类，让一组线程互相等待，直到所有参与者（线程）都到达某个公共屏障点（common barrier point），该 barrier 在释放等待线程后可以重用</li><li>构造器 <ul><li>CyclicBarrier(int parties)：创建一个新的 CyclicBarrier，它将在给定数量的参与者（线程）处于等待状态时启动</li><li>CyclicBarrier(int parties, Runnable barrierAction)：创建一个新的 CyclicBarrier，它将在给定数量的参与者（线程）处于等待状态时启动，并在启动 barrier 时执行给定的屏障操作，该操作由最后一个进入 barrier 的线程执行</li></ul></li><li>实例方法 <ul><li><code>int await()</code>：在所有参与者都已经在此 barrier 上调用 await 方法之前，将一直等待</li><li><code>int await(long timeout, TimeUnit unit)</code></li><li><code>int getNumberWaiting()</code></li><li><code>int getParties()</code></li></ul></li></ul><h3 id="semaphore-信号量" tabindex="-1"><a class="header-anchor" href="#semaphore-信号量"><span>Semaphore 信号量</span></a></h3><ul><li>一般用于控制对某组资源的访问权限</li><li>可以控制同时访问的线程个数（<strong>限流</strong>）</li><li>通过 acquire() 获取一个许可，如果没有就等待，直到获取许可为止；通过 release() 释放一个许可</li></ul><h2 id="aqs-框架" tabindex="-1"><a class="header-anchor" href="#aqs-框架"><span>AQS 框架</span></a></h2><ul><li>AQS（AbstractQueuedSynchronizer.java）是 Java 实现同步锁的基础框架</li><li>AQS 工作原理：用 volatile int state 变量来表示当前同步锁的状态，用 getState() 获取同步锁的状态，用 <code>compareAndSetState(int expect, int update)</code> 来对 state 的状态进行修改</li></ul><h3 id="reentrantlock-的实现" tabindex="-1"><a class="header-anchor" href="#reentrantlock-的实现"><span>ReentrantLock 的实现</span></a></h3><ul><li>获取锁 <ul><li>lock() 方法：首先尝试 CAS 获得锁 <code>compareAndSetState(0, 1)</code>，成功则把占有锁的线程设置为当前线程，返回，失败则调用 acquire 方法</li><li>acquire 方法为 AQS 实现的模板方法，它调用 tryAcquire 方法尝试获得锁，成功则返回，不成功则进入等待队列直至获取成功</li><li>tryAcquire() 方法：查询当前 state 值，如果为 0 则说明当前锁还未被其他线程获取，则尝试 CAS 获得锁，成功则把占有锁的线程设置为当前线程，返回 true，失败返回 false；如果 state 不为 0 则说明该锁已经被其他线程获取，则检查获得锁的线程是否是当前线程以实现可重入特性，如果是，则更新 state 的值，并返回 true</li></ul></li><li>释放锁，unlock() 直接调用 tryRelease() 方法： <ul><li>首先检查当前释放锁的线程，如果不是已占有锁的线程则抛出异常，因为 ReentrantLock 是独占式锁，释放锁的线程一定是占有锁的线程</li><li>将 state 值减 1，判断：如果 state 值等于 0 的，说明获取锁的所有方法都已经返回，则锁释放成功；如果 state 值不等于 0，说明只是部分递归的方法返回，部分递归方法还未返回，则释放失败，锁依然被占有</li></ul></li><li>在并发环境下，获取锁和释放锁需要以下三个部件的协调： <ul><li>锁状态：state 为 0 的时候代表没有线程占有锁，可以去争抢这个锁，用 CAS 将 state 设为 1，如果 CAS 成功，说明抢到了锁；如果锁重入，state 进行 +1，释放锁就 -1，直到 state 又变为 0，代表释放锁，然后唤醒等待队列中的<strong>第一个</strong>线程，让其来占有锁</li><li>线程的阻塞和解除阻塞：AQS 中采用了 LockSupport.park(thread) 来挂起线程，用 unpark 来唤醒线程</li><li>等待队列：AQS 的等待队列基于是双向链表实现的，每个线程被包装成一个 Node 实例（属性：thread、waitStatus、pre、next），其中 head 节点不关联线程</li></ul></li><li>非公平锁 NonfairSync 和公平锁 Sync 的不同之处： <ul><li>非公平锁在调用 lock() 后，首先就会调用 CAS 进行一次抢锁，如果这个时候锁没有被占用，就直接获取到锁并返回</li><li>非公平锁在 CAS 失败后，和公平锁一样都会进入到 tryAcquire 方法，在 tryAcquire 方法中，如果发现这个时候锁被释放了（state == 0），非公平锁会直接 CAS 抢锁，而公平锁会通过 hasQueuedPredecessors() <strong>判断等待队列是否有线程处于等待状态</strong>，如果有则将自己放在等待队列的队尾</li></ul></li></ul><h2 id="锁的类型" tabindex="-1"><a class="header-anchor" href="#锁的类型"><span>锁的类型</span></a></h2><h3 id="乐观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁"><span>乐观锁</span></a></h3><ul><li>乐观锁是一种乐观思想，即认为<strong>读多写少</strong>，遇到并发写的可能性低，每次去<strong>拿数据</strong>的时候都认为别人不会修改，所以<strong>不会上锁</strong>，但是<strong>在更新的时候会判断</strong>一下在此期间别人有没有去更新这个数据：采取<strong>在写时</strong>先读出当前版本号，然后加锁操作（比较跟上一次的版本号，如果一样则更新），如果失败则要重复读-比较-写的操作</li><li>Java 中的乐观锁基本都是通过 CAS 操作实现的，CAS 是一种更新的原子操作，比较当前值跟传入值是否一样，一样则更新，否则失败</li></ul><h3 id="悲观锁" tabindex="-1"><a class="header-anchor" href="#悲观锁"><span>悲观锁</span></a></h3><ul><li>悲观锁是就是悲观思想，即认为<strong>写多</strong>，遇到并发写的可能性高，每次去拿数据的时候都认为别人会修改，所<strong>以每次在读写数据的时候都会上锁</strong>，这样别人想读写这个数据就会 block 直到拿到锁</li><li>Java 中的悲观锁就是 synchronized，AQS 框架下的锁则是先尝试 CAS 乐观锁去获取锁，获取不到，才会转换为悲观锁，如 RetreenLock</li></ul><h2 id="java-对象的数据结构" tabindex="-1"><a class="header-anchor" href="#java-对象的数据结构"><span>Java 对象的数据结构</span></a></h2><ul><li>在 HotSpot 虚拟机中，Java 对象在内存中存储的布局可以分为 3 块区域：对象头（Header）、实例数据（Instance Data）和对齐填充（Padding）</li><li><strong>对象头</strong>中的 Mark Word 部分，用于存储对象自身的运行时数据，如哈希码（HashCode）、GC 分代年龄、锁状态标志、线程持有的锁、偏向线程 ID、偏向时间戳等，其中的最后 2bit 是<strong>锁状态标志位</strong>（无锁、偏向锁、轻量级锁、重量级锁、GC 标识）</li></ul><h2 id="java-中的锁" tabindex="-1"><a class="header-anchor" href="#java-中的锁"><span>Java 中的锁</span></a></h2><ul><li>JVM 从 1.5 开始，引入了偏向锁与轻量级锁，默认启用了自旋锁，它们都属于乐观锁</li></ul><h3 id="偏向锁" tabindex="-1"><a class="header-anchor" href="#偏向锁"><span>偏向锁</span></a></h3><ul><li>如果在运行过程中，同步锁<strong>只有当前线程访问，不存在多线程争用</strong>的情况，则线程是不需要触发同步的，这种情况下，就会给线程加一个偏向锁</li><li>如果在运行过程中，遇到了其它线程抢占锁，则持有偏向锁的线程会被挂起，JVM 会消除它身上的偏向锁，将锁恢复到标准的轻量级锁</li><li>通过消除资源无竞争情况下的同步原语，进一步提高了程序的运行性能</li></ul><h3 id="轻量级锁" tabindex="-1"><a class="header-anchor" href="#轻量级锁"><span>轻量级锁</span></a></h3><ul><li>由偏向所升级来的，偏向锁运行在一个线程进入同步块的情况下，当<strong>第二个线程加入锁争用</strong>的时候，偏向锁就会升级为轻量级锁</li></ul><h3 id="自旋锁" tabindex="-1"><a class="header-anchor" href="#自旋锁"><span>自旋锁</span></a></h3><ul><li>为了不让当前线程进入阻塞状态，<strong>让当前线程循环去获取锁</strong></li><li>在经过若干次循环后，如果可以得到锁，那么就顺利进入临界区，如果还不能获得锁，才会将线程在操作系统层面挂起</li><li>自旋锁的优缺点 <ul><li>使等待竞争锁的线程<strong>不需要做</strong>用户态和内核态之间的切换进入阻塞挂起状态，减少了不必要的上下文切换，执行速度快</li><li>需要消耗 CUP，让 CUP 在做无用功，所以需要设定一个自旋等待的最大时间（如设置为一个线程上下文切换的时间）</li></ul></li></ul><h3 id="重量级锁-synchronized" tabindex="-1"><a class="header-anchor" href="#重量级锁-synchronized"><span>重量级锁 synchronized</span></a></h3><ul><li>重量级锁把除了拥有锁的线程都阻塞，防止 CPU 空转</li><li>非公平锁，可以重入</li><li>synchronized 的执行过程： <ul><li>检测 Mark Word 中的偏向锁标识是否为 1，线程 ID 是不是当前线程 ID，如果是，表示当前线程处于偏向锁</li><li>如果不是，则使用 CAS 将 Mark Word 中线程 ID 设置为当前线程 ID，如果成功则表示当前线程获得偏向锁</li><li>如果失败，则说明发生竞争，撤销偏向锁，进而升级为轻量级锁</li><li>当前线程使用 CAS 将对象头的 Mark Word 替换为指向当前线程的栈帧中 Lock Record 的指针，如果成功，当前线程获得锁</li><li>如果失败，表示其它线程竞争锁，当前线程尝试使用自旋来获取锁</li><li>如果自旋成功则依然处于轻量级状态</li><li>如果自旋失败，则膨胀为重量级锁</li></ul></li><li>在所有的锁都<strong>启用</strong>的情况下，线程进入临界区时会先去获取偏向锁，如果已经存在偏向锁了，则会尝试获取轻量级锁，启用自旋锁，如果自旋也没有获取到锁，则使用重量级锁，没有获取到锁的线程阻塞挂起，直到持有锁的线程执行完同步块唤醒他们</li></ul><h3 id="锁优化" tabindex="-1"><a class="header-anchor" href="#锁优化"><span>锁优化</span></a></h3><ul><li>减少锁的时间：不需要同步执行的代码，能不放在同步快里面执行就不要放在同步快内，可以让锁尽快释放</li><li>减少锁的粒度：将物理上的一个锁，拆成逻辑上的多个锁，增加并行度，从而降低锁竞争，如 ConcurrentHashMap 在 jdk1.8 之前的版本</li><li>锁粗化：将多个连续的加锁、解锁操作连接在一起，扩展成一个范围更大的锁，避免频繁的加锁解锁操作</li><li>使用读写锁：读操作加读锁，可以并发读，写操作使用写锁，只能单线程写，如 ReentrantReadWriteLock</li><li>使用 volatile + CAS 操作</li></ul>',64),o=[h];function d(c,k){return s(),e("div",null,o)}const u=i(r,[["render",d],["__file","index.html.vue"]]),g=JSON.parse(`{"path":"/notes/JavaSE/i7yczwvu/","title":"多线程02","lang":"zh-CN","frontmatter":{"title":"多线程02","createTime":"2024/08/26 15:15:00","permalink":"/notes/JavaSE/i7yczwvu/","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"]]},"headers":[{"level":2,"title":"线程池","slug":"线程池","link":"#线程池","children":[{"level":3,"title":"Executors 工具类","slug":"executors-工具类","link":"#executors-工具类","children":[]},{"level":3,"title":"ExecutorService 接口","slug":"executorservice-接口","link":"#executorservice-接口","children":[]},{"level":3,"title":"ScheduledExecutorService 接口","slug":"scheduledexecutorservice-接口","link":"#scheduledexecutorservice-接口","children":[]},{"level":3,"title":"ThreadPoolExecutor","slug":"threadpoolexecutor","link":"#threadpoolexecutor","children":[]},{"level":3,"title":"ScheduledThreadPoolExecutor","slug":"scheduledthreadpoolexecutor","link":"#scheduledthreadpoolexecutor","children":[]},{"level":3,"title":"通过 ThreadPoolExecutor 的方式创建线程池","slug":"通过-threadpoolexecutor-的方式创建线程池","link":"#通过-threadpoolexecutor-的方式创建线程池","children":[]}]},{"level":2,"title":"JUC","slug":"juc","link":"#juc","children":[{"level":3,"title":"原子类","slug":"原子类","link":"#原子类","children":[]},{"level":3,"title":"并发容器类","slug":"并发容器类","link":"#并发容器类","children":[]},{"level":3,"title":"CountDownLatch 计数器","slug":"countdownlatch-计数器","link":"#countdownlatch-计数器","children":[]},{"level":3,"title":"CyclicBarrier 栅栏","slug":"cyclicbarrier-栅栏","link":"#cyclicbarrier-栅栏","children":[]},{"level":3,"title":"Semaphore 信号量","slug":"semaphore-信号量","link":"#semaphore-信号量","children":[]}]},{"level":2,"title":"AQS 框架","slug":"aqs-框架","link":"#aqs-框架","children":[{"level":3,"title":"ReentrantLock 的实现","slug":"reentrantlock-的实现","link":"#reentrantlock-的实现","children":[]}]},{"level":2,"title":"锁的类型","slug":"锁的类型","link":"#锁的类型","children":[{"level":3,"title":"乐观锁","slug":"乐观锁","link":"#乐观锁","children":[]},{"level":3,"title":"悲观锁","slug":"悲观锁","link":"#悲观锁","children":[]}]},{"level":2,"title":"Java 对象的数据结构","slug":"java-对象的数据结构","link":"#java-对象的数据结构","children":[]},{"level":2,"title":"Java 中的锁","slug":"java-中的锁","link":"#java-中的锁","children":[{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]},{"level":3,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":3,"title":"自旋锁","slug":"自旋锁","link":"#自旋锁","children":[]},{"level":3,"title":"重量级锁 synchronized","slug":"重量级锁-synchronized","link":"#重量级锁-synchronized","children":[]},{"level":3,"title":"锁优化","slug":"锁优化","link":"#锁优化","children":[]}]}],"readingTime":{"minutes":19.1,"words":5730},"git":{"createdTime":1724666056000,"updatedTime":1724666056000,"contributors":[{"name":"chgoh7","email":"3180349973@qq.com","commits":1}]},"filePathRelative":"notes/JavaSE/02 多线程/多线程02.md"}`);export{u as comp,g as data};
