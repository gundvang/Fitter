<?php
		
	require_once('plugins/less.class.php');
	$lessCompiler = new lessc();
	$lessCompiler->setFormatter('compressed');
	$infile = 'assets/css/style.less';
	$outfile = 'assets/css/style.css';
	$lessCompiler->compileFile($infile, $outfile);

    require_once('_index.html');
    